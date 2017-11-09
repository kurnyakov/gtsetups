const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarCategory = new Schema({
  name: String 
});

module.exports = mongoose.model('CarCategory', CarCategory);
