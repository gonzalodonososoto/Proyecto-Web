//Modulos internos
const express = require ("express");
const mongoose = require ("mongoose");
const cors = require ("cors");

//Modulos creados
const usuario = require ("./routes/usuario");
const auth = require ("./routes/auth");
const publicacion = require ("./routes/publicacion");

//App
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/usuario/",usuario);
app.use("/api/auth/", auth);
app.use("/api/publicacion", publicacion);

//Puerto de ejecucion
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Ejecutando en puerto " + port));

//Registro en mongo
mongoose.connect("mongodb://localhost/local" , { useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex: true})
.then(()=>console.log("Conexion mongo OK"))
.catch(err=>console.log("Conexion mongo OFF"));
