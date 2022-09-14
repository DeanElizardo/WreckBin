const express = require('express');

const router = express.Router();

router.all('/:binid', (req, res) => {
  console.log('IP Address:', req.headers.host); // IP
  console.log('Headers:', req.headers); // Headers
  console.log('Parameters:', req.params); // Parameters
  console.log('Query String: ', req.query);
  console.log('Body:', req.body); // Body
  console.log('HTTP Method:', req.method); // HTTP Verb
  console.log('Content Size:', req.headers['content-length']); // Size

  res.status(200);
  res.end();
});

module.exports = router;
