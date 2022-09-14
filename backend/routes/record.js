const express = require('express');

const router = express.Router();

router.get('/:binid', (req, res) => {
  const capture = {};
  console.log(req.headers);
  res.status(200);
  res.end();
});

router.post('/:binid', (req, res) => {
  const capture = {};
  console.log(req.headers);
  res.status(200);
  res.end();
});

router.put('/:binid', (req, res) => {
  const capture = {};
  console.log(req.headers);
  res.status(200);
  res.end();
});

router.patch('/:binid', (req, res) => {
  const capture = {};
  console.log(req.headers);
  res.status(200);
  res.end();
});

router.delete('/:binid', (req, res) => {
  const capture = {};
  console.log(req.headers);
  res.status(200);
  res.end();
});

module.exports = router;
