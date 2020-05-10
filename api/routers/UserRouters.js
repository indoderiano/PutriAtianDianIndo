const express=require('express')
const {UserControllers}=require('../controllers')

const Router=express.Router()

Router.get('/allusers',UserControllers.allusers)
Router.get('/login',UserControllers.loginuser)

// Router.get('/nothing',UserControllers.empty)

module.exports=Router