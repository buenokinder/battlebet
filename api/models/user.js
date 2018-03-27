const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  name: {
    first: String,
    last: { type: String, trim: true },
    required: false
  },
  contry: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    required: false
  },
  address: {
    street: String,
    number: { type: String, trim: true },
    city: { type: String, trim: true },
    zipcode: { type: String, trim: true },
    required: false
  },
  mobile: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', userSchema);