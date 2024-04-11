const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Enter name => must have name !'],
    },
    price: {
      type: Number,
      required: [true, 'must have price'],
      defoult: 0,
    },
    quantity: {
      type: Number,
      required: [true, 'must have quantity'],
      defoult: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timeseries: true,
  }
);

const sampleProduct = mongoose.model('sampleProduct', productSchema);

module.exports = sampleProduct;
