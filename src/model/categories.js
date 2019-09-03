'use strict';


const Model = require('./mongoo'); //TODO: make sure model works, mongo issues? 
const schema = require('./categories-schema');

class Categories extends Model {
  constructor() { super(schema); }
}

module.exports = Categories;
