//Modulos Internos
const express = require("express");
const router = express.Router();

//Modulos creados
const{Usuario} = require("../model/usuario");
//Ruta
router.post("/",async (req, res) => {
  //se revisa si existe el mismo correo en la bd
  let usuario = await Usuario.findOne({correo: req.body.correo});
  //si el usuario existe en bd
  if (usuario) return res.status(400).send("El usuario ya esta registrado");
  //si el correo no existe
  usuario = new Usuario({
    nombre: req.body.nombre,
    edad: req.body.edad,
    genero: req.body.genero,
    correo: req.body.correo,
    contrasenia: req.body.contrasenia,
  })
  //Se guarda el usuario en bd y se genera el JWT
  const result = await usuario.save();
  const jwtToken = usuario.generateJWT();
  res.status(200).send({jwtToken})
})

//Export
module.exports = router;
