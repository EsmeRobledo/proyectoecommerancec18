const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    existencias: Number
})

const Producto = mongoose.model('Productos', productoSchema)

module.exports = Producto