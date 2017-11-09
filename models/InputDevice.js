const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InputDevice = new Schema({
  type: String
});

module.exports = mongoose.model('InputDevice', InputDevice);
