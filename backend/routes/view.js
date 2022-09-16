/**
 * This file contains all of the routes for handling
 * user interactions with the front end
 */
const express = require('express');
const { query } = require('../services/db.js');
const uuid = require('../services/uuid.js');
const Request = require('../models/request');

const router = express.Router();

/* Generate a user id and respond to the client */
router.post('/uuid', (req, res) => {
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

/* Delete a bin and its requests. */
router.delete('/:userID/:binID', (req, res, next) => {
  // Delete in Mongo
  Request.deleteMany({ binId: req.params.binID }).catch(error => next(error));

  // Delete in PostgreSQL
  const constructedQuery = {
    text: 'DELETE FROM Requests WHERE binid = $1',
    values: [req.params.binID],
  };

  query(constructedQuery, err => {
    if (err) {
      throw err;
    }
  });

  const secondaryQuery = {
    text: 'DELETE FROM bins WHERE binid = $1',
    values: [req.params.binID],
  };

  query(secondaryQuery, err => {
    if (err) {
      throw err;
    }
  });

  return res
    .status(200)
    .send('Bin and associated requests successfully deleted.');
});

/* view individual request */
router.get('/:userId/:binId/:requestId', (req, res, next) => {
  Request.findById(req.params.requestId)
    .then(person => {
      res.json(person);
    })
    .catch(error => next(error));
});

/* Delete individual request */
router.delete('/:userId/:binId/:requestId', (req, res, next) => {
  // Delete in Mongo
  Request.findByIdAndDelete(req.params.requestId).catch(error => next(error));

  // Delete in PostgreSQL
  const constructedQuery = {
    text: 'DELETE FROM Requests WHERE uniquedocid = $1',
    values: [`"${req.params.requestId}"`],
  };

  query(constructedQuery, err => {
    if (err) {
      throw err;
    }

    return res.status(200).send('Request successfully deleted.');
  });
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
    return res.json({ binID: id });
  });
});

module.exports = router;
