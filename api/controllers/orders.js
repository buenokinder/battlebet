const mongoose = require('mongoose')

const Order = require('../models/order'); 
const Product = require('../models/prize');

exports.orders_get_all = (req, res, next) => {
  Order.find()
  .select("prize quantity _id")
  .populate("prize", "name")
  .exec()
  .then(datas => {
    res.status(200).json({
      count: datas.length,
      orders: datas.map(data => {
        return {
          _id: data.id,
          product: data.product,
          quantity: data.quantity,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/orders/'+data.id
          }
        }
      })
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  })
}

exports.orders_create_order = (req, res, next) => {
  Product.findById(req.body.productId)
    .then(product => {
      if(!product) {
        return res.status(404).json({
          message: 'Prize not found'
        })
      }
      const order = new Order({
        quantity: req.body.quantity,
        product: req.body.productId
      });
      return order.save()
    })
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'Order Created',
        createdObject: {
          _id: result.id,
          product: result.product,
          quantity: result.quantity
        },
        request: {
          type: 'GET',
          url: 'http://localhost:3000/order/'+result.id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    })
}

exports.orders_get_order = (req, res, next) => {
  const id = req.params.id;
  Order.findById(id)
  .populate("prize")
  .exec()
  .then(data => {
    if(!data) {
      return res.status(404).json({
        message: 'Order not found'
      })
    }
    res.status(200).json({
      order: data,
      request: {
        type: 'GET',
        url: 'http://localhost:3000/orders'
      }
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  })
}

exports.orders_delete_order = (req, res, next) => {
  const id = req.params.id;
  Order.remove({ _id: id})
  .exec()
  .then(result => {
    res.status(200).json({
      message: 'Order deleted',
      request: 'POST',
      body: { productId: '_ID', quantity: 'Number'}
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  })
}