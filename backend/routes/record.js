const express = require('express');

const router = express.Router();

router.all('/:binid', (req, res) => {
  console.log("IP Address:", req.headers.host);
  console.log("Headers:", req.headers); // Headers
  console.log("Params:", req.params); // Parameters
  console.log("Body:", req.body); 
  console.log("HTTP Method:", req.method);
  console.log("Content Size:", req.headers['content-length']);
  res.status(200);
  res.end();
});

module.exports = router;
