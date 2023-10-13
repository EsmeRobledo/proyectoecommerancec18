require('dotenv').config()
//usamos el frameword de express para REST API
const express = require('express');
const producto = require('../backend/src/routes/Productos')
//usamos cors para permitir conexiones entre distintos dominios
//localhost
const cors = require('cors');
//importacion del modulo de conneccion a la base de datos
const connect = require('./src/config/db')

const auth = require('./src/routes/auth')


//iniciamos el server con express
const server = express();
//todo lo que esta dentro del server.use es un middleware 
//middleware es una funcion de express
server.use(cors());
//Usamos el middleware de express Json para poder leer los datos
//desde el body
server.use(express.json());

//iniciamos o mandamos llamar a la funcion que conecta a la base de datos
connect()
auth(server)
//este middleware nos ayuda a la descarga o servir los archivos e imagenes en nuesto server
server.use('/Images', express.static(`${__dirname}/../uploads`));
producto(server)

server.get('/', (request, response) => {
    response.send("API V1.0")
})


//Primero : iniciamos el servidor de express con 
server.listen(process.env.PORT, () => {
    console.log("servidor iniciado en el puerto ", process.env.PORT);
})