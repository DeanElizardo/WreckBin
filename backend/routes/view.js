/**
 * This file contains all of the routes for handling
 * user interactions with the front end
 */
const { response } = require('express');
const express = require('express');
const { query } = require('../services/db.js');
const uuid = require('../services/uuid.js');
const Request = require('../models/request');

const router = express.Router();

/* Generate a user id and respond to the client */
router.get('/uuid', (req, res) => {
  const userInformation = { userId: uuid.genUserID() };
  return res.json(userInformation);
});

/* get all bins associated with user id */
router.get('/:userID', (req, res, next) => {
  const id = req.params.userID;

  const constructedQuery = {
    text: 'SELECT * FROM Bins WHERE userId = {$1}',
    values: [id],
  };

  query(constructedQuery, (err, result) => {
    return response.send(result);
  }).catch(err => next(err));
});

/* get all records associated with bin */
router.get('/:binID', (req, res, next) => {
  const id = req.params.binID;

  const constructedQuery = {
    text: 'SELECT uniqueDocId FROM Requests WHERE binId = {$1}',
    values: [id],
  };

  query(constructedQuery, (err, result) => {
    return response.send(result);
  }).catch(err => next(err));
});

/* view individual request */
router.get('/:requestId', (req, res, next) => {
  Request.findById(req.params.id)
    .then(person => {
      response.json(person);
    })
    .catch(error => next(error));
});

/* generate a new bin */
router.post('/:userId/new', (req, res, next) => {
  // Create a new bin
  const id = uuid.genBinID();
  const constructedQuery = {
    text: 'INSERT INTO BINS(binId, userId, createdOn, lastAccessed) VALUES($1, $2, $3, $4)',
    values: [id, req.params.userId, Date.now(), Date.now()],
  };

  query(constructedQuery, (err, result) => {
    return response.send(result);
  }).catch(err => next(err));

  // Redirect to the path of '/:binid'
  res.redirect(`/bins/${id}`);
});

module.exports = router;
