require('dotenv').config
const express = require('express')
const app = express()
const port= 3002

app.get("/", (req, res)=>{
    res.send('This is home page')
})
app.get("/about", (req, res)=>{
    res.send('This is about page')
})

app.get("/login", (req,res)=>{
    res.send("<h1>Please Stay Updated To login</h1>")
})

app.get("/youtube", (req,res)=>{
    res.send("<h2>Vishal Jangid</h2>")
})
// app.get("/about", (req, res)=>{
//     res.send("This is about page")
// })

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`);
})