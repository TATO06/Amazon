//Llamado de los procedimientos almacenados de modulo ticket
const mysqlConnection = require('../../../config/db');
const { validationResult } =require('express-validator');



//consulta de carrera y asignatura nuevo
exports.agenda = async(req,res)=>{
   const {id} = req.params;
   await mysqlConnection.query('call sp_carrera_asignatura_select(?)',[id],(err,rows,fields)=>{
    if (!err) {
        res.json(rows[0]);
    }else{
        console.log(err);
    }
   });
};

exports.mensajeNuevo = async(req, res)=>{
    const {id} = req.params;
    await mysqlConnection.query('CALL sp_carrera_asignatura_select(?)',[id],(err,rows,fields)=>{
        if (!err) {
            res.json(rows[0]);
        }else{
            console.log(err);
        }
  });  
 };


//consulta de sala general
exports.agenda = async(req,res)=>{
    const {id} = req.params;
    await mysqlConnection.query('call sp_ver_sala_ru(?)',[id],(err,rows,fields)=>{
     if (!err) {
         res.json(rows[0]);
     }else{
         console.log(err);
     }
    });
 };
 
 exports.mensajeNuevo = async(req, res)=>{
     const {id} = req.params;
     await mysqlConnection.query('CALL sp_ver_sala_ru(?)',[id],(err,rows,fields)=>{
         if (!err) {
             res.json(rows[0]);
         }else{
             console.log(err);
         }
   });  
  };



//-------------------------------------




//update de tarea o examenes a realizar       PENDIENTE
exports.mensajeLeido=async(req,res)=>{
    const {id} = req.params;
    try {
        const updateMjs = await mysqlConnection.query('CALL XXXXXXX(?)',[id]);
        return res.json(updateMjs);
    } catch (error) {
        console.log(error);
    }

};



//insertar actividad          PERDINETE
exports.insertMensaje= async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
     const {descripcion,almacenamiento,person1,person2,asig} = req.body;
     const query = `CALL sp_instertTicket(?,?,?,?,?);`;
     //person1  envia el mensaje 
     //person2 recibe el mensaje
      await mysqlConnection.query(query,[descripcion,almacenamiento,person1,person2,asig],(err,rows,fields)=>{
          if (!err) {
              res.json({Status:'Mensaje Enviado!'});
          }else{
              console.log(err);
          }
      });
     };
 


//delete de trabajo presentado
exports.eliminar_mensaje = async (req,res)=>{
    const {id} = req.params;
  
    try {
        const deleteMjs = await mysqlConnection.query('CALL sp_deleteMensaje(?)',[id]);
        return res.json (deleteMjs);
       

    } catch (error) {
        console.log(error)
    }
  
};
