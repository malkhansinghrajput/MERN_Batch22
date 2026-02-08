const express = require('express')
require('dotenv').config()

const port =process.env.PORT || 3000;

const app = express()

// app.use(express.json())

app.get("/", (req,res)=>{
    res.send("<h1>Jay shree Ram</h1>")
})

app.listen(port,()=> {
    console.log(`server listening at http://localhost:${port}`)
})