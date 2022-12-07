//Modulos Internos
const mongoose = require ("mongoose");

//Esquema
const esquemaPublicacion = new mongoose.Schema({
  idUsuario: String,
  tema: String,
  contenido: String,
  fecha: {
    type: Date,
    default: Date.now
  }

})

//Exports

const Publicacion = mongoose.model("publicacion", esquemaPublicacion);
module.exports.Publicacion = Publicacion;
