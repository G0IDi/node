const path = require('path');
let ruta = `./enviroment/${process.env.ENTORNO}.env`;
console.log(process.env.ENTORNO);
const dotenv = require('dotenv').config({
    path: path.resolve(__dirname,ruta)
});