//Modulos internos
const express = requiere ("express");
const mongoose = requiere ("mongoose");


//Modulos creados
const usuario = require ("./routes/usuario");
const auth = require ("./routes/auth");

//App
const app = express();
app.use(express.json());
app.use("/api/usuario/",usuario);
app.use("/api/auth/", auth);

//Puerto de ejecucion
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Ejecutando en puerto " + port));

//Registro en mongo
mongoose.connect("mongodb://localhost/scrum" , { useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex: true})
.then(()=>console.log("Conexion mongo OK"))
.catch(err=>console.log("Conexion mongo OFF"));
