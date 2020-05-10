const mysql=require('mysql')

// const db=mysql.createConnection({
//     host:'localhost',
//     user:'Scherzie',
//     password:'ch3v@l!nSQL80',
//     database:'tugaskelompok',
//     port:'3306'
// })

const db=mysql.createConnection({
    host:'db4free.net',
    user:'mde50526',
    password:'leathershoes',
    database:'indodatacamp',
    port:'3306'
})

db.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('database is connected')
    }
})

module.exports={db}