'use strict';

module.exports = (error, reques, response, next) => {
  console.log('__SERVER_ERROR__', error);
  let error = { error: error.message || error };
  response.status(500).json(error);
};
