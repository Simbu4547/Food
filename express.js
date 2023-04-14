const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// GET /food
router.get('/food', async (req, res) => {
  try {
    const food = await Food.find();
    res.json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /food?type=fast-food
router.get('/food', async (req, res) => {
  const { type } = req.query;
  try {
    const food = await Food.find({ type });
    res.json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /food?type=fast-food&maxdeliverytime=50
router.get('/food', async (req, res) => {
  const { type, maxdeliverytime } = req.query;
  try {
    const food = await Food.find({ type, maxdeliverytime });
    res.json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /food/:id
router.get('/food/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const food = await Food.findById(id);
    res.json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
