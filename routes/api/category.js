const express = require('express');
const mongoose = require('mongoose');
const Category = require('../../models/CarCategory.js');

// configure mongoose promises
mongoose.Promise = global.Promise;
const router = express.Router();

// TODO: make use route.delete instead
// router.delete('/:id', async (req, res) => {
// error handler ?

router.post('/delete', async (req, res) => {
  const query = Category.findByIdAndRemove(req.body.id);
  const deletedCategory = await query.exec();
  return res.send(deletedCategory);
}); 

// TODO: error handler ?
router.get('/list', async (req, res) => {
  const query = Category.find({});
  const foundCategory = await query.exec();
  return res.send(foundCategory);
});

router.post('/save', async (req, res) => {
  const query = Category.findOne({ name: req.body.category });
  const foundCategory = await query.exec();
  if (foundCategory) { 
    return res.send(JSON.stringify({ error: 'Category already exists' })); 
  }

  if (!foundCategory) {
    var category = new Category({
      name: req.body.category,
    });
    return category.save(function (err) {
      if(err){
        return res.send(JSON.stringify({ error: err }));
      }
      return res.send(category);
    });
  }
});

module.exports = router;
