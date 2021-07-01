const express = require('express');
const router = express.Router();



// controllers
const authCtrl = require('../controllers/auth/AuthCtrl'); 
const calificacionesCtrl = require('../controllers/registro_calificaciones/ModRegistroCalificacionesCtrl');
const modTiicket  = require('../controllers/moduloTicket/ticketCtrl.js');
const estudiante  = require('../controllers/moduloEstudiante/matriculadasCtr.js');
//const { check } = require('express-validator'); 

router.get('/auth/login', authCtrl.pageAuth);
router.get('/auth/recuperacion', authCtrl.recuperacion);
router.get('/auth/new_password', authCtrl.newPassword);
router.get('/', authCtrl.pantalla_inicio);

router.get('/calificaciones', calificacionesCtrl.pantalla_inicio);
//pantallas modulo ticket
router.get('/mensajes', modTiicket.pantalla_ticket);
router.get('/mensajeNuevO', modTiicket.pantalla_nuevoMjs);
router.get('/responder/:id', modTiicket.pantalla_responderticket);
// router.get('/calificaciones', require('./registro_calificaciones'));

//pantallas modulo estudantes  //aqui llamo la ruta
router.get('/matricula', estudiante.pantalla_matriculadas); //req todo lo que el cliente consluta,  res todo lo quiero enviar al cliente 
router.get('/clase/:id', estudiante.pantalla_clases); //segunda pantalla de clase matriculada
router.get('/entrega', estudiante.pantalla_entregas);
router.get('/tarea/:id', estudiante.pantalla_tareas);
router.get('/parciales/:id', estudiante.pantalla_parciales); //pantalla solo del parcial seleccionado

//router.get('*', (req, res) => res.redirect('/') );
module.exports = router;