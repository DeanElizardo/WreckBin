/**
 * This file contains all of the routes for handling 
 * user interactions with the front end
 */
import express from 'express';
import { query } from '../db.js';
import { generateID } from '../services/generateBinId.js';

export const router = express.Router();

/* view homepage */
router.get('/', (req, res) => {
  console.log(req.body);
  res.status(200);
  res.end();
});

/* get all records associated with bin id */
router.get('/:binID', (req, res) => {});

/* generate a new bin */
router.post('/new', (req, res) => {
  const newBinID = generateID();
  
});
