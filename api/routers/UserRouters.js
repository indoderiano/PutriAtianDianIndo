const express=require('express')
const {UserControllers}=require('../controllers')

const Router=express.Router()

Router.get('/allusers',UserControllers.allusers)

module.exports=Router