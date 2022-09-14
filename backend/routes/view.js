/**
 * This file contains all of the routes for handling 
 * user interactions with the front end
 */
const express = require('express');
const { query } = require('../db.js');
const { generateID } = require('../services/generateBinID.js');

const router = express.Router();

/* view homepage */
router.post('/', (req, res) => {
  console.log("BODY:", req.body);
  console.log("HEADERS", req.headers);
  console.log("PARAMS", req.params);
  console.log("METHOD", req.method);
  //console.log("SIZE", req.headers.get('content-length'));
  //console.log("TYPE", req.headers.get('Content-Type'));
  res.status(200);
  res.end();
});

/* get all records associated with bin id */
router.get('/:binID', (req, res) => {});

/* generate a new bin */
router.post('/new', (req, res) => {
  const newBinID = generateID();
  
});

module.exports = router;
