//Llamado de los procedimientos almacenados de modulo ticket
const mysqlConnection = require('../../../config/db');
const { validationResult } =require('express-validator');

//consulta de mensaje nuevo

exports.agenda = async(req,res)=>{
   const {id} = req.params;
   await mysqlConnection.query('call sp_agenda(?)',[id],(err,rows,fields)=>{
    if (!err) {
        res.json(rows[0]);
    }else{
        console.log(err);
    }
   });
};

exports.mensajeNuevo = async(req, res)=>{
    const {id} = req.params;
    await mysqlConnection.query('CALL sp_ViewNewMjs(?)',[id],(err,rows,fields)=>{
        if (!err) {
            res.json(rows[0]);
        }else{
            console.log(err);
        }
  });  
   
};

//consulta mensajes dell usuario atraves de Id usuario 
exports.verMensajes=async(req, res)=>{
   const {id} =  req.params;
   await mysqlConnection.query('call sp_selectMensaje(?)',[id],(err,rows,fields)=>{
          if (!err) {
              res.json(rows[0]);
          }else{
              console.log(err);
          }
    });
};

// ver mensaje  en especifico atraves de id mensaje
exports.verMensajexid=async(req, res)=>{
    const {id} =  req.params;
   await mysqlConnection.query('call sp_selectMensajexId(?)',[id],(err,rows,fields)=>{
       if (!err) {
           res.json(rows[0]);
       }else{
           console.log(err);
       }
   });
 
 };

//insertar mensaje
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


//update de mensajes nuevos atraves de id mensaje
exports.mensajeLeido=async(req,res)=>{
    const {id} = req.params;
    try {
        const updateMjs = await mysqlConnection.query('CALL sp_UpdateEstMJS(?)',[id]);
        return res.json(updateMjs);
    } catch (error) {
        console.log(error);
    }

};


//delete atraves de id mensaje
exports.eliminar_mensaje = async (req,res)=>{
    const {id} = req.params;
  
    try {
        const deleteMjs = await mysqlConnection.query('CALL sp_deleteMensaje(?)',[id]);
        return res.json (deleteMjs);
       

    } catch (error) {
        console.log(error)
    }
  
};
