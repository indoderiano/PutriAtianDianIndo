const express=require('express')
const {UserControllers}=require('../controllers')
const {auth}=require('./../helper/Auth')
const router=express.Router()

router.get('/allusers',UserControllers.allusers)
router.get('/users',UserControllers.users)
router.post('/users',UserControllers.addusers)
router.put('/users/:id',UserControllers.editusers)
router.delete('users/:id',UserControllers.deleteusers)
router.post('/register',UserControllers.userregister)
router.put('/verified',UserControllers.userverified)
router.get('/createtoken',UserControllers.generatetoken)
router.get('/tokenberubah',auth,UserControllers.tokenberubah)


module.exports=router