const express = require ('express');
const { AddUser, getAllUsers, updateUser, deleteUser } = require('../controllers/user');


const appRoutes = express.Router();

appRoutes.get('/AddUser',AddUser)
appRoutes.get('/getAllUsers',getAllUsers)
appRoutes.get('/updateUser',updateUser)
appRoutes.get('/deleteUser',deleteUser)

module.exports = appRoutes
