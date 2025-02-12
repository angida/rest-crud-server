const express = require('express');
const Car = require('../model/Car');
const carRoute = express.Router();
  
/* Add car */
carRoute.post('/cars/create', async (req, res, next) => {
  try {
    const car = await Car.create(req.body);
    console.log(car);
    res.json(car);
  } catch (error) {
    next(error);
  }
});
  
/* Get all cars*/
carRoute.get('/cars', async (req, res, next) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    next(error);
  }
});
  
/* Get car by ID */
carRoute.get('/cars/:id', async (req, res, next) => {
  try {
    const car = await Car.findById(req.params.id);
    res.json(car);
  } catch (error) {
    next(error);
  }
});
  
/* Update car */
carRoute.put('/cars/:id', async (req, res, next) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedCar);
  } catch (error) {
    next(error);
  }
});
  
/* Delete car */
carRoute.delete('/cars/:id', async (req, res, next) => {
  try {
    const deletedCar = await Car.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Car deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = carRoute;