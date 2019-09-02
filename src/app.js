'use strict';

require('dotenv').config();
const express = require('express');

//middleware being brought in 
const cors = require('cors');
const morgan = require('morgan');


const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );


const app = express();

//app level middleware 
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(router); //this is wrong

//catch all/error handling
app.use(notFound);
app.use(errorHandler);


module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    })
  },
  server: app,
};