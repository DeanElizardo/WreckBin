const express = require('express');
const Request = require('../models/request');

const router = express.Router();

router.all('/:binid', (req, res, next) => {
  const id = req.params.binid;

  const result = new Request({
    userId: id,
    createdOn: Date.now(),
    payload: {
      ipAddress: req.headers.host,
      headers: req.headers,
      parameters: req.query,
      body: req.body,
      method: req.method,
      size: req.headers,
    },
  });

  console.log('IP Address:', req.headers.host); // IP
  console.log('Headers:', req.headers); // Headers
  console.log('Parameters:', req.params); // Parameters
  console.log('Query String:', req.query); // Query String
  console.log('Body:', req.body); // Body
  console.log('HTTP Method:', req.method); // HTTP Verb
  console.log('Content Size:', req.headers['content-length']); // Size

  result
    .save()
    .then(savedRequest => {
      res.json(savedRequest);
    })
    .catch(error => next(error));

  res.sendStatus(200).end();
});

module.exports = router;
