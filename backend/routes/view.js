/**
 * This file contains all of the routes for handling
 * user interactions with the front end
 */
const express = require('express');
const { query } = require('../services/db.js');
const { generateID } = require('../services/generateBinID.js');

const router = express.Router();

/* view homepage */
router.get('/', (req, res) => {});

/* get all records associated with bin id */
router.get('/:userID', (req, res) => {});

/* generate a new bin */
router.post('/new', (req, res) => {
  const newBinID = generateID();
});

module.exports = router;
