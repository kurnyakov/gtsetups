const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GTSSetup = new Schema({
  name: String,
  author: String,
  description: String,
  video: String,
  inputDevice: [{ type: Schema.Types.ObjectId, ref: 'InputDevice' }]
  setup: {
    traction : Number,
    tyres: String, // Enum?
    brakes : Number, // must be an object?
    suspernsion : {
    height : { front : Number, rear : Number },
      frequency : { front : Number, rear : Number },
      antiroll : { front : Number, rear : Number },
      compression : { front : Number, rear : Number },
      rebound : { front : Number, rear : Number },
      camber : { front : Number, rear : Number },
      toe : { front : Number, rear : Number }
    },
    aerodinamic : {
      downforce : { front : Number, rear : Number }
    },
    drivetrain : {
      type : String, // Enum?
      initialTorque : Number,
      accelerationSensivity : Number,
      brakingSensivity : Number
    },
    transmission : {
      type : String, // Enum?
      maxSpeed : Number,
      first : Number,
      second : Number,
      third : Number,
      fourth : Number,
      fifth : Number,
      sixth : Number,
      seventh : Number,
      eight : Number,
      nineth : Number,
      tenth : Number,
      finalGear : Number
    }
  }
});

module.exports = mongoose.model('GTSSetup', GTSSetup);
