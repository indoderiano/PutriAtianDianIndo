const nodemailer=require('nodemailer')

var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'ardiani.bernhard@gmail.com',
        pass:'csexfypaiqnhafzf'
    },
    tls:{
        rejectUnauthorized:false
    }
})

module.exports=transporter