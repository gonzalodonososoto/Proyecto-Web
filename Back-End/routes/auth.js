//Modulos de node
const express = require("express");
const router = express.Router();

//Modulos internos
const { Usuario } = require ("../model/usuario");

//ruta
router.post("/", async (req, res) => {
  //Se valida si existe el correo
  const usuario = await Usuario.findOne({correo: req.body.correo});
  //si no existe el correo
  if (!usuario)
    return res.status(400).send("El correo no es valido");
  //si la contraseña es incorrecta
  if (usuario.contrasenia !==  req.body.contrasenia)
    return res.status(400).send("La contraseña no es valida");
  //Se genera el JWT
  const jwtToken = usuario.generateJWT();
  res.status(200).send({ jwtToken});
} );

//Exports

module.exports = router;
