const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user');

exports.user_signup = (req, res, next) => {
  console.log('Passou');
  User.find({email: req.body.email})
  .exec()
  .then(user => {
    if(user.length >= 1){
      res.status(409).json({ message: 'Email Already Exists'})
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) {
          return res.status(500).json({ error: err})
        } else {
          const user = new User({
            email: req.body.email,
            password: hash
          })
          user.save()
          .then(result => {
            console.log(result)
            res.status(201).json({ message: 'User Created' })
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
          })
        }
      })
    }
  })
}

exports.user_login = (req, res, next) => {
  console.log('Passou');
  User.find({email: req.body.email})
  .exec()
  .then(user => {
    // check if email(user) exists
    if(user.length < 1) {
      return res.status(401).json({ message: 'Auth Failed'})
    }
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if(err) {
        return res.status(401).json({ message: 'Auth Failed'})
      }
      if(result) {
        const token = jwt.sign({
            email: user[0].email,
            userId: user[0]._id
          }, 
          process.env.JWT_KEY,
          {
            expiresIn: "1h"
          }
        );
        return res.status(200).json({
          message: 'Auth Successful',
          token: token
        })
      }
      res.status(401).json({ message: 'Auth Failed'})
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ error: err })
  })
}

exports.user_delete = (req, res, next) => {
  User.remove({_id: req.params.id})
  .exec()
  .then(result => {
    res.status(200).json({
      message: 'User Deleted'
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ error: err })
  })
}