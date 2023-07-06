const express = require('express');
const app = express()
require('../src/db/Connection')
const router = require('../src/router/Users')

const PORT = process.env.PORT || 3100

app.use(express.json());

app.use('/home',(req,res)=>{
    res.json({
        msg:"Hi I am from express after github cide pipeline"
    })
})

app.use(router)



app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(PORT, ()=>{
    console.log(`server is connected in ${PORT}`)
})