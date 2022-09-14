/**
 * This file contains all of the routes for handling 
 * user interactions with the front end
 */
import express from 'express';
import pg from 'pg';
export const router = express.Router();

/*
 * home page
 */
router.get('/', (req, res) => {});

/* 
 * get a reference for all records 
 * with this bin id
 */
router.get('/:id', (req, res) => {});

/*
 * generate a new bin
 */
router.post('/', (req, res) => );
