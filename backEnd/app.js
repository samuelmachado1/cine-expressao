const express = require('express');
const app = express();

const usersRoute = require('./routes/users');

app.use('/users', usersRoute);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  return res.send({
    error: {
      message: error.message
    }
  });

  res.status({
    error: {
      message: error.message
    }
  });
});


module.exports = app;