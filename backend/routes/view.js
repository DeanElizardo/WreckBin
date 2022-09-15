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
router.get('/:userID', (req, res) => {
  const id = req.params.userID;

  const constructedQuery = {
    text: 'SELECT binid, userid, createdon, lastaccessed FROM Bins WHERE userId = $1 AND deleted = false',
    values: [id],
  };

  query(constructedQuery, (err, result) => {
    if (err) {
      throw err;
    }

    res.json(result.rows);
  });
});

/* get all requests associated with bin */
router.get('/:userID/:binID', (req, res) => {
  const constructedQuery = {
    text: 'SELECT uniqueDocId FROM Requests WHERE binId = $1',
    values: [req.params.binID],
  };

  query(constructedQuery, (err, result) => {
    if (err) {
      throw err;
    }

    return res.json(result.rows);
  });
});

/* view individual request */
router.get('/:userId/:binId/:requestId', (req, res, next) => {
  Request.findById(req.params.requestId)
    .then(person => {
      res.json(person);
    })
    .catch(error => next(error));
});

/* generate a new bin */
router.post('/:userId/new', (req, res) => {
  // Create a new bin
  const id = uuid.genBinID();

  const constructedQuery = {
    text: 'INSERT INTO BINS(binId, userId, createdOn, lastAccessed) VALUES($1, $2, NOW(), NOW())',
    values: [id, req.params.userId],
  };

  query(constructedQuery, err => {
    if (err) {
      throw err;
    }

    // Redirect to the path of '/:userID/:binID'
    return res.redirect(302, `/users/${req.params.userId}/${id}`);
  });
});

module.exports = router;
