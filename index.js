'use strict';

const app = require('./src/app.js');


const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true, 
};

mongoose.connect(process.env.MONGODB_URI, options);


require('./src/app.js').start(process.env.PORT);

app.start();
