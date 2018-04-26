const express = require('express');
const mongoose = require('mongoose');
const Car = require('../../models/Car.js');

// configure mongoose promises
mongoose.Promise = global.Promise;
const router = express.Router();

// TODO: make use route.delete instead
// router.delete('/:id', async (req, res) => {
// error handler ?

router.post('/delete', async (req, res) => {
  const query = Car.findByIdAndRemove(req.body.id);
  const deletedCar = await query.exec();
  return res.send(deletedCategory);
}); 

// TODO: error handler ?
router.get('/list', async (req, res) => {
  const query = Car.find({});
  const foundCar = await query.exec();
  return res.send(foundCategory);
});

router.post('/save', async (req, res) => {
  /*const query = Car.findOne({ name: req.body.name });
  const foundCategory = await query.exec();
  if (foundCategory) { 
    return res.send(JSON.stringify({ error: 'Category already exists' })); 
  }

  if (!foundCategory) {*/
    var car = new Car({
      name: req.body.car,
      category: req.body.category,
    });
    
    return car.save(function (err) {
      if(err){
        return res.send(JSON.stringify({ error: err }));
      }
      return res.send(car);
    });
  //}
});

module.exports = router;
