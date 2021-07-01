const express = require ('express');
const router = express.Router();
//const {check} = require('express-validator');

//controllers
const estudiante = require ('../controller/estudiante');

const { check } = require('express-validator');      //requerimos expressValidator para hacer las validaciones
                                //ruta de la primera pantalla
router.get('/carreraasignatura/:id', estudiante.selectActividad);
                                     //ruta de la clase seleccionada
router.get('/trabajo/:id', estudiante.selectTrabajos);  //NO ESTA EN USO PERO FUNCIONA
router.get('/parciales/:id', estudiante.selectParciales); //llama a los parciales que puede teer una clase
router.get('/selectActiParc/:id', estudiante.selectActiParc); //Utilizando para llamar a los txp llama los trabajos asignados por el docente a una clase en especifico 

router.post('/',[                                                              // validamos el envio de los datos 
    check('com','Se esperaba un valor minimo de 4 caracteres').isLength({min:4}),   // mandamos un mensaje de minimo y maximo de caracteres
    check('com','No se permiten mas de 200 caracteres').isLength({max:200}) //para que no acepte el envio en blanco
    ], estudiante.insertentregaactividad);    
router.put('/:id', estudiante.updateActualiza);//actualizar el estado del trabajo entregado
router.delete('/delete/:id', estudiante.deleteTrabajos);//elimina el trabajo presentado

module.exports = router;    