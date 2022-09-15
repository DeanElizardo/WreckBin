/**
 * This file contains all of the routes for handling
 * user interactions with the front end
 */
const express = require('express');
const { query } = require('../services/db.js');
const uuid = require('../services/uuid.js');

const router = express.Router();

/* Generate a user id and respond to the client */
router.get('/uuid', (req, res) => {
  res.json(uuid.genUserID());
});

/* view individual bin */
router.get('/:binid', (req, res) => {});

/* get all records associated with user id */
// router.get('/:userID', (req, res) => {});

/* view individual request */
router.get('/:requestId', (req, res) => {});

/* generate a new bin */
router.post('/new', (req, res) => {
  // Create a new bin
  const newBinID = uuid.genBinID();

  // Redirect to the path of '/'view '
});

module.exports = router;
