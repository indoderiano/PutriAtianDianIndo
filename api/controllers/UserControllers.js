const {db}=require('../connections/mysql')
const encrypt= require('./../supports/crypto')

module.exports={
    allusers:(req,res)=>{
        console.log('all users data')
        var sql='select * from users'
        db.query(sql,(err,alluser)=>{
            if(err) return res.status(500).send(err)
            res.status(200).send(alluser)
        })
        // res.status(200).send({data:'test'})
    },
    testindo:(req,res)=>{
        console.log('test')
    },
    //Putri
    login:(req,res)=>{
        const {username,password}=req.query
        var sql=`select * from users where username='${username}' and password='${encrypt(password)}'`
        db.query(sql,(err,result)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(result)
        })
    },
}