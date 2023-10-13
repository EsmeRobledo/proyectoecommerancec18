const mongoose = require('mongosse')

const menuSchema = new mongoose.Schema(
    {
        nombre: {type: String, require: true},
        descripcion: {type: String, 
            require: [true, 'Se requiere la descripcion del producto'],
            length:[30, 'debe ser maximo 30 caracteres']},
        img: File,
        precio: Number,
        producto: {productoID: {type: mongoose.ObjectId, ref: 'productos'}}
    }
)

const Menu = mongoose.model('menu', menuSchema);

module.exports = Menu;