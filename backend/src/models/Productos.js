const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number },
    img: { type: String }
})

const Producto = mongoose.model('Productos', productoSchema)

module.exports = Producto