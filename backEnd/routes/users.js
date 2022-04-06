const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    message: 'GET!!! It works!'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).send({
    message: 'POST!!! It works!'
  });
});

module.exports = router;