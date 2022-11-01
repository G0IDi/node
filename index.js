const config = require('./app/config');
const express  = require('express');
const { Server } = require('http');
const servidor = express();
const colors = require('colors');

const port = process.env.PORT;

servidor.get("/",(req,res)=>{
    res.send("hello world")
})

servidor.get("/godoy",(req,res)=>{
    res.send("<h1>que pasa master 😎👌</h1>")
    
})

servidor.listen(port,()=>{
    mensaje = `estas en la url http://localhost:${port}`;
    switch (process.env.ENTORNO) {
        case "qa":
            console.log(mensaje.bgYellow);
            break;
        case "development":
            console.log(mensaje.bgBlue);
            break;
        case "production":
            console.log(mensaje.bgRed);
            break;
        default:
            break;
    }
    
})