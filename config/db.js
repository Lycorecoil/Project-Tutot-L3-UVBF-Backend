const mongoose = require("mongoose")

const connexion = mongoose.createConnection('mongodb://localhost:27017/ToDo').on('open',()=>{
	console.log("MongoDB connected");
}).on('error',()=>{
	console.log("MongoDB Conexion Eroor ")
})

module.exports = connexion