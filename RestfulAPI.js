const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/food', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/food', async (req, res) => {
  const { type, maxdeliverytime } = req.query;
  let filter = {};
  if (type) {
    filter.foodType = type;
  }
  if (maxdeliverytime) {
    filter.maxDeliveryTime = { $lte: maxdeliverytime };
  }
  const food = await Food.find(filter);
  res.json(food);
});

app.get('/food/:id', async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food) {
    return res.status(404).json({ error: 'Food item not found' });
  }
  res.json(food);
});

app.post('/food', async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.status(201).json(food);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/food/:id', async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!food) {
      return res.status(404).json({ error: 'Food item not found' });
    }
    res.json(food);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/food/:id', async (req, res) => {
  const food = await Food.findByIdAndDelete(req.params.id);
  if (!food) {
    return res.status(404).json({ error: 'Food item not found' });
  }
  res.json({ message: 'Food item deleted' });
});

app.post 
