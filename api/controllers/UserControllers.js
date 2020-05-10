const {db}=require('../connections/mysql')
const transporter=require('./../helper/mailer')
const encrypt=require('./../helper/crypto')
const {createJWTToken}=require('./../helper/jwt')

module.exports={
    allusers:(req,res)=>{
        db.query('select * from users',(err,result)=>{
            if (err) return res.status(500).send(err)
            // console.log(result)
            return res.status(200).send(result)
        })
    },
    users(req,res){
        const {username,password}=req.query
        var sql=`select * from users where username = ? and password = ?`
        db.query(sql,[username,password],(err,result)=>{
            if (err) return res.status(500).send(err)
            return res.status(200).send(result[0])
        })
    },
    addusers:(req,res)=>{
        // console.log(req.body)
        if(req.body.username===''||req.body.password===''){
            return res.status(500).send('mohon lengkapi semua data yang diperlukan')
        }
        var sql=`insert into users set ?`
        db.query(sql,req.body,(err,result)=>{
            if (err) return res.status(500).send(err)
            // console.log('masuk')
            db.query('select * from users',(err,result1)=>{
                if (err) return res.status(500).send(err)
                return res.status(200).send(result1)
            })
        })
    },
    editusers:(req,res)=>{
        // console.log('params',req.params)
        // console.log(req.body)
        var sql=`update users set ? where id=${req.params.id}`
        db.query(sql,req.body,(err,result)=>{
            if (err) return res.status(500).send(err)
            db.query('select * from users',(err,result1)=>{
                if (err) return res.status(500).send(err)
                return res.status(200).send(result1)
            })
        })
    },
    deleteusers:(req,res)=>{
        var sql=`delete from users where id=${req.params.id}`
        db.query(sql,req.body,(err,result)=>{
            if (err) return res.status(500).send(err)
            db.query('select * from users',(err,result1)=>{
                if (err) return res.status(500).send(err)
                return res.status(200).send(result1)
            })
        })
    },
    userregister:(req,res)=>{
        const {username,password,email}=req.body
        const hashpass=encrypt(password)
        var sql=`select * from users where username='${username}'`
        db.query(sql,(err,result)=>{
            if (err) return res.status(500).send(err)
            if(result.length){
                return res.status(500).send({message:'username telah dipakai'})
            }else{
                sql=`insert into users set ?`
                var data={
                    username:username,
                    password:hashpass,
                    email
                }
                db.query(sql,data,(err,result1)=>{
                    if (err) return res.status(500).send(err)
                    var LinkVerifikasi=`http://localhost:5000/verified?userid=${result1.insertId}&password=${hashpass}`
                    transporter.sendMail({
                        from:'Admin <ardiani.bernhard@gmail.com>',
                        to:email,
                        subject:'E-mail Verifikasi',
                        html:`Hai ${result1.username},
                        mohon melakukan verifikasi email kamu melalui link berikut ini:
                        <a href=${LinkVerifikasi}>Verifikasi E-mail</a>`,                        
                    },(err,result2)=>{
                        if (err) return res.status(500).send(err)

                        sql=`select * from users where id=${result1.insertId}`
                        db.query(sql,(err,result3)=>{
                            if (err) return res.status(500).send(err)
                            const token=createJWTToken({id:result3[0].id,username:result3[0].username})
                            return res.status(200).send({...result3[0],token})
                        })
                    })
                })
            }
        })
    },
    userverified:(req,res)=>{
        const {userid,password}=req.body
        var obj={
            verified:1
        }
        var sql=`update users set ? where id=${userid} and password='${password}'`
        db.query(sql,obj,(err,result)=>{
            if(err){
                return res.status(500).send(err)
            }
            sql=`select * from users where id=${userid}`
            db.query(sql,(err,result1)=>{
                if(err){
                    return res.status(500).send(err)
                }
                return res.status(200).send(result1[0])
            })
        })
    },
    generatetoken:(req,res)=>{
        const token=createJWTToken({id:1,username:'putriatiandianindo'})
        res.status(200).send({token})
    },
    tokenberubah:(req,res)=>{
        console.log(req.user)
        res.send({data:req.user})
    }
}