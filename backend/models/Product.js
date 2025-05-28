const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['cleanser', 'toner', 'serum', 'moisturizer', 'sunscreen', 'mask', 'treatment']
  },
  description: {
    type: String,
    required: true
  },
  ingredients: [{
    type: String,
    trim: true
  }],
  skinTypes: [{
    type: String,
    enum: ['dry', 'oily', 'combination', 'normal', 'sensitive']
  }],
  concerns: [{
    type: String,
    enum: ['acne', 'aging', 'dryness', 'oiliness', 'sensitivity', 'hyperpigmentation']
  }],
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    comment: String,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema); 