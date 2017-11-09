const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Car = new Schema({
  name: String,
  category: { type: Schema.Types.ObjectId, ref: 'CarCategory' },
  manufacturer: { type: Schema.Types.ObjectId, ref: 'CarManufacturer' },
  year: Number,
  price: Number
});

module.exports = mongoose.model('Car', Car);
