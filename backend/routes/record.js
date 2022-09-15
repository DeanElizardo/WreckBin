const express = require('express');
const Request = require('../models/request');
const { query } = require('../services/db.js');
const router = express.Router();

// wreckbin.com/record/:binid

router.all('/:binid', (req, res, next) => {
  const id = req.params.binid;

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
      res.json(savedRequest);

      const constructedQuery = {
        text: 'INSERT INTO REQUESTS(binId, uniqueDocID) VALUES($1, $2)',
        values: [id, savedRequest._id],
      };

      query(constructedQuery);
    })
    .catch(error => next(error));

  res.sendStatus(200).end();
});

module.exports = router;
