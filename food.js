const express = require('express');
const router = express.Router();
const Food = require('../models/food');

// Get all food items
router.get('/food', async (req, res) => {
  try {
    const food = await Food.find();
    res.json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get food items with a specific type
router.get('/food', async (req, res) => {
  try {
    const type = req.query.type;
    const food = await Food.find({ type: type });
    res.json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get food items with a specific type and max delivery time
router.get('/food', async (req, res) => {
  try {
    const type = req.query.type;
    const maxDeliveryTime = req.query.maxdeliverytime;
    const food = await Food.find({ type: type, maxDeliveryTime: { $lte: maxDeliveryTime } });
    res.json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific food item
router.get('/food/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new food item
router.post('/food', async (req, res) => {
  const food = new Food({
    name: req.body.name,
    type: req.body.type,
    maxDeliveryTime: req.body.maxDeliveryTime,
    ingredients: req.body.ingredients,
  });

  try {
    const newFood = await food.save();
    res.status(201).json(newFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing food item
router.put('/food/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    food.name = req.body.name || food.name;
    food.type = req.body.type ||
