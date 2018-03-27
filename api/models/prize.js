const mongoose = require('mongoose');

const prizeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  productImage: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Prize', prizeSchema);