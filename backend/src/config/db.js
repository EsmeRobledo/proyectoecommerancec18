require('dotenv').config()
const mongoose = require('mongoose')


const connect = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URL)
    console.log('Se ha conectado correctamente:', connection.connection.host)
}

module.exports = connect