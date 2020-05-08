const express=require('express')
const {UserControllers}=require('../controllers')

const Router=express.Router()

Router.get('/allusersindo',UserControllers.allusers)
// Router.get('/nothing',UserControllers.empty)

module.exports=Router