const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth')

const UserController = require('../controllers/users');

/*  SAVE NEW USER */
router.post('/signup', UserController.user_signup)

/* LOGIN USER */
router.post('/login', UserController.user_login)

/* DELETE USER */
router.delete('/:id', checkAuth,  UserController.user_delete)

/* Update User */
// router.patch('/:id', checkAuth, UserController.user_update); 

/* Single USer */
// router.get('/:id', checkAuth,  UserController.user_get_user);

module.exports = router;