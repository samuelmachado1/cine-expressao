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

router.get('/:userId', (req, res, next) => {
  const id = req.params.userId;
  res.status(200).send({
    message: 'GET with user!!! It works!',
    id: id
  });
});

router.patch('/:userId', (req, res, next) => {
  const id = req.params.userId;
  res.status(200).send({
    message: 'PATCH!!! It works!',
    id: id
  });
});

router.delete('/', (req, res, next) => {
  const id = req.params.userId;
  res.status(200).send({
    message: 'DELETE!!! It works!',
    id: id
  });
});


module.exports = router;