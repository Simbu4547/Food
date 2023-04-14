const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  foodType: { type: String, enum: ['delicious food', 'nutritious food', 'fast food', 'beverages', 'dessert'], required: true },
  maxDeliveryTime: { type: Number, required: true },
  price: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
  status: { type: String, enum: ['Placed', 'Out for Delivery', 'Delivered', 'Cancelled'], required: true },
});

const Food = mongoose.model('Food', foodSchema);
const Order = mongoose.model('Order', orderSchema);
