'use strict';

const express = require('express');
const apiRouter = express.Router();

const User = require('./model/users-model.js')

apiRouter.post('/signup', (request, response, next) => {
  const user = new User(request.body);
  user.save()
    .then( (user) => {
      request.token = user.generateToken(); 
      request.user = user;
      response.set('token', request.token);
      response.cookie('auth', request.token);
      response.send(request.token);
    }).catch(next);
});

apiRouter.post('/signin', auth, (request, response, next) => {
  response.cookie('auth', request.token);
  response.send(request.token);
});

apiRouter.post('/oauth', (request, response, next) => {
  oauth.authorize(request)
    .then( token => {
      response.status(200).send(token);
    })
    .catch(next);
});


module.exports = apiRouter; 