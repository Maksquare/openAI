const express = require('express')
const router = express.Router()
const {getAllUsers,getUser} = require('../controllers/userController')
// get all users
//Method - GET
router.get('/users',getAllUsers)
// get a single user
//Method - GET
router.get('/user/:id',getUser)

module.exports = router