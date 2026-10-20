const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


app.use((req, res, next) => {
  console.log("PETICIÓN RECIBIDA Método: " + req.method + " | Ruta: " + req.url);
  next(); 
});


app.get('/inicio', (req, res) => {
  res.status(200).json({
    mensaje: "Bienvenido a la API de registro de solicitudes"
  });
});


app.get('/informacion', (req, res) => {
  res.status(200).json({
    servicio: "Gestión de solicitudes de servicios",
    descripcion: "API desarrollada en Node.js y Express para el SENA",
    version: "1.0.0"
  });
});


app.post('/solicitudes', (req, res) => {
  const { nombre, apellido, correo } = req.body;

 
  if (!nombre || !apellido || !correo) {
    return res.status(400).json({
      error: "Datos incompletos",
      mensaje: "Los campos nombre, apellido y correo son obligatorios"
    });
  }

  if (!correo.includes('@')) {
    return res.status(400).json({
      error: "Correo inválido",
      mensaje: "El correo electrónico debe incluir un '@'"
    });
  }

  res.status(201).json({
    "dato_enviado": nombre,
    "dato_apellido": apellido,
    "dato_correo": correo,
    "mensaje": "registro completo"
  });
});

app.get('/error-servidor', (req, res) => {
  try {
   
    console.log(variableInexistente.propiedad);
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
      mensaje: "Ocurrió un fallo inesperado en el servidor"
    });
  }
});



app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    mensaje: "La ruta " + req.url + " no existe en el servidor"
  });
});


app.listen(PORT, () => {
  console.log("Servidor ejecutándose correctamente en el puerto " + PORT);
});