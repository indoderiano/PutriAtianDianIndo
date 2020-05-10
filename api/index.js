const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const bearertoken=require('express-bearer-token')

const app=express()

const PORT=5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(bearertoken())
app.use(cors())


app.get('/',(req,res)=>{
    return res.send("<h1 style='text-align:center; margin-top:100px;'>API by Indo</h1>")
})


const {UserRouters,FotoRouters}=require('./routers')
app.use('/users',UserRouters)
// app.use('/foto',FotoRouters)


app.listen(PORT,()=>console.log('API is online at port '+PORT))


