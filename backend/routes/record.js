const express = require('express');
const Request = require('../models/request');
const { query } = require('../services/db.js');
const router = express.Router();

router.all('/:binId', (req, res, next) => {
  const id = req.params.binId;

  const result = new Request({
    binId: id,
    createdOn: Date.now(),
    payload: {
      ipAddress: req.headers.host,
      headers: req.headers,
      parameters: req.query,
      body: req.body,
      method: req.method,
      size: req.headers['content-length'],
    },
  });

  result
    .save()
    .then(savedRequest => {
      const constructedQuery = {
        text: 'INSERT INTO REQUESTS(binId, uniqueDocID) VALUES($1, $2)',
        values: [id, savedRequest.id],
      };

      query(constructedQuery);

      res.json(savedRequest);
    })
    .catch(error => next(error));
});

module.exports = router;
