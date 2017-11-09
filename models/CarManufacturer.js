const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarManufacturer = new Schema({
  name: String,
  country: String
});

module.exports = mongoose.model('CarManufacturer', CarManufacturer);