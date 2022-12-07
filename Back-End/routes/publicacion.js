//Modulos de node
const express = require ("express");
const router = express.Router();

//Modulos internos

const Publicacion = require("../model/publicacion");
const { Usuario } = require("../model/usuario");
const auth = require ("../middleware/auth");
//rutas

//Mostrar publicacion del usuario
router.get ("/mostrar", auth, async (req, res)=>{
  //Se busca el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  //Si no existe el usuario
  if (!usuario) return res.status(401).send("No existe el usuario");
  //Si el usuario existe
  const publicacion = await Publicacion.find({ idUsuario: req.usuario._id});
  res.send(publicacion);
})

//Registrar Publicacion
router.post("/", auth, async(req, res) => {
  //Se obtine el id del usuario con el correo y contraseña
  const usuario = await Usuario.findById(req.usuario._id);
  //Si el usuario no existe
  if (!usuario) return res.status(401).send("El usuario no existe");
  //si existe el usuario creamos la publicacion
  const publicacion = new Publicacion({
    idUsuario: usuario._id,
    tema: req.body.tema,
    contenido: req.body.contenido,
  });

  //Se envia el resultado
  const result = await publicacion.save();
  res.status(200).send(result);



});

//editar Publicacion
router.put("/", auth, async (req, res) =>{
  //Se busca al usuario de la publicacion
  const usuario = await Usuario.findById(req.usuario._id);
  //Si el usuario no existe
  if (!usuario) return res.status(401).send("El usuario no existe");
  //si existe se realiza el update
  const publicacion = await Publicacion.findByIdAndUpdate(
    req.body._id,
    {
      idUsuario: usuario._id,
      tema: req.body.tema,
      contenido: req.body.contenido,
    },
    {
      new: true,
    }
  )
  //si no existe la publicacion
  if(!publicacion) return res.status(401).send("No existe la publicacion");
  //si se realizo el update
  res.status(200).send(publicacion);
});

//Eliminar publicacion
router.delete("/:_id", auth, async(req, res)=>{
  //Se busca al usuario de la publicacion
  const usuario = await Usuario.findById(req.usuario._id);
  //Si el usuario no existe
  if (!usuario) return res.status(401).send("El usuario no existe");
  //Si existe el usuario se elimina la publicacion
  const publicacion = await Publicacion.findByIdAndDelete(req.params._id);
  //Si no existe la publicacion
  if (!publicacion) return res.status(401).send("No existe la publicacion");
  //Si se encuentra la publicacion
  res.status(200).send({ message: "Publicacion Eliminada"});
});

//Export
module.exports = router;
