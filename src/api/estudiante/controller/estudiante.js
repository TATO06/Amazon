
//Llamado de los procedimientos almacenados de modulo estudiante
const mysqlConnection = require('../../../config/db');
const { validationResult } =require('express-validator');
const cloudinary = require('cloudinary').v2;



cloudinary.config({
    cloud_name: 'sistemadecalificaciones21',//process.env.CLOUDINARY_CLOUD_NAME,
    api_key: '665423886726526',//process.env.CLOUDINARY_API_KEY,
    api_secret: 'v62U6CMsresi80bJjCu0NsZn1_I'//process.env.CLOUDINARY_API_SECRET
  });


//consulta la asignatura matriculada
exports.selectActividad = async(req,res)=>{
   const {id} = req.params;
   await mysqlConnection.query('call sp_selectActividad(?)',[id],(err,rows,fields)=>{
    if (!err) {
        res.json(rows[0]);
    }else{
        console.log(err);
    }
   });
};


//consulta de trabajos asignados a los estudiantes *NO ESTA EN USO*
exports.selectTrabajos = async(req,res)=>{
    const {id} = req.params;
    await mysqlConnection.query('call sp_selectTrabajos(?)',[id],(err,rows,fields)=>{
     if (!err) {
         res.json(rows[0]);
     }else{
         console.log(err);
     }
    });
 };


 //consulta de trabajos asignados a los estudiantes
exports.selectActiParc = async(req,res)=>{
    const {id} = req.params;
    await mysqlConnection.query('call sp_selectActiParc(?)',[id],(err,rows,fields)=>{
     if (!err) {
         res.json(rows[0]);
     }else{
         console.log(err);
     }
    });
 };


//consulta los parciales de las clases
 exports.selectParciales = async(req,res)=>{
    const {id} = req.params;
    await mysqlConnection.query('call sp_selectParciales(?)',[id],(err,rows,fields)=>{
     if (!err) {
         res.json(rows[0]);
     }else{
         console.log(err);
     }
    });
 };
 



      //insertar actividad 
exports.insertentregaactividad= async(req,res)=>{  //validamos los dato que vamos a enviar
    const errors = validationResult(req);          //utilizamos expressValidator
    if(!errors.isEmpty()){                          // pedimos como minimo 4 caracteres
        return res.status(422).json({errors: errors.array()});
    }
     const {com,ent,cloudinary,usr_reg,id_est,id_doc,id_act} = req.body;     //agregar un campo mas de la tabla 
     const query = `CALL sp_insertentregaactividad (?,?,?,?,?,?,?);`;

      await mysqlConnection.query(query,[com,ent,cloudinary,usr_reg,id_est,id_doc,id_act],(err,rows,fields)=>{
          if (!err) {
              res.json({Status:'enviado!'});
          }else{
              console.log(err);
          }
      });   
     };


     //validacion en backend

//delete de trabajo presentado
exports.deleteTrabajos = async (req,res)=>{
    const {id} = req.params;
  
    try {
         const image = await mysqlConnection.query(
             'SELECT `cloudinary` FROM entrega_actividad WHERE id_entrega=(?)', [id]);
            let imagen = image[0].cloudinary;
            if (!imagen ==""){
                await cloudinary.oploader.destroy(imagen);
            }         

        const deleteMjs = await mysqlConnection.query('CALL sp_deleteTrabajos(?)',[id]);
        return res.json (deleteMjs);
       
    } catch (error) {
        console.log(error)
    }
};





          //actualizar estado de la tarea
          exports.updateActualiza =async(req,res)=>{
            const {id} = req.params;
            try {
            const updateMjs = await mysqlConnection.query('CALL sp_updateActualiza(?)',[id]);
              return res.json(updateMjs);
                 } catch (error) {
                    console.log(error);
             }
    
           };

