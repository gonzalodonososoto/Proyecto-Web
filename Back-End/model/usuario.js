const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//esquema
const esquemaUsuario = new mongoose.Schema({
  nombre: {
    type: String,
  },
  edad: {
    type: String,
  },
  genero: {
    type: String,
  },
  correo: {
    type: String,
  },
  contrasenia:{
    type: String,
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});

//se genera la jwt
esquemaUsuario.methods.generateJWT = function () {
  return jwt.sign({
    _id: this._id,
    nombre: this.nombre,
    correo: this.correo,
  },"clave")
}

//Exports
const Usuario = mongoose.model("usuario",esquemaUsuario);
module.exports.Usuario = Usuario;
module.exports.esquemaUsuario = esquemaUsuario;
