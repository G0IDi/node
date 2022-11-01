const config = require('./app/config');
const express  = require('express');
const { Server } = require('http');
const servidor = express();
const colors = require('colors');
const { callbackify } = require('util');

const port = process.env.PORT;

servidor.get("/",(req,res)=>{
    res.send("hello world")
})

servidor.get("/godoy",(req,res)=>{
    res.send("<h1>que pasa master 😎👌</h1>")
    
})

servidor.listen(port,callback)