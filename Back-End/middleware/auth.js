//Modulos de node
const jwt = require("jsonwebtoken");
//Funcion middleware
function auth(req, res, next) {
  let jwtToken = req.header("Authorization");
  //Se separa el Bearer del token
  jwtToken = jwtToken.split(" ")[1];
  //Si no existe el token
  if (!jwtToken) return res.status(401).send("No hay token para validar");
  //Si existe el jwt
  try {
    const payload = jwt.verify (jwtToken, "clave");
    next ();
  } catch (error) {
    res.status(401).send("Token no valido, sin autorizacion a procesos");
  }
}

//Exports
module.exports = auth;
