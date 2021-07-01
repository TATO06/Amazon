///alert('modulo de estudiante clase matriculada');
(()=>{

    let ruta=[];// variable para el almacenamiento de la ruta de imagen
    let public=[];

   //subida de la imagen a un servidor externo
    const imageview =document.getElementById('img-view'); //id de la pantalla de la etiqueta progreso entrega.hbs
    const imageUploader = document.getElementById('file'); // envio id de la pantalla, input SUBIR ARCHIVO entrega.hbs
    const progresbar = document.getElementById('progres-image');  //progreso
   
     const claudinary_url ='https://api.cloudinary.com/v1_1/sistemadecalificaciones21/image/upload'; //url del servidor externo para guardar los documentos
     const cloudinary_preset = 'ypwueown'; //codigo de Cloudinary, calve univa para su previa revisi6ón
   
     imageUploader.addEventListener('change', async (e)=>{  //entrega variable de la funcción
          const file = e.target.files[0];
   
           const formData = new FormData();
           formData.append('file', file);
           formData.append('upload_preset', cloudinary_preset);
   
          const res = await axios.post(claudinary_url, formData,{
              headers: {
                  'Content-Type': 'multipart/form-data'
              }, onUploadProgress(e) {
             
               const progres = (e.loaded * 100)/e.total;
               progresbar.setAttribute('value',progres);
           }
          });
           console.log(res);
           imageview.src = res.data.secure_url; //para vidualizar la imagen en la 
           ruta = res.data.secure_url;
           public=res.data.public_id;
   
   
     });

                           //guardar los datos del formulario a la BD   
       $('#envio').on('submit', async function(evento){
           evento.preventDefault(); //cancela que la pagina se recargue
           
           
           const com = $('#descripcion').val();
           const ent = String(ruta);
           const cloudinary =  String(public);
           const usr_reg = root; 
           const id_est = 2;
           const id_doc = 3;
           const id_act = 4;

           //alert (almacenamiento);
         
           if(descripcion.length >= 4 && descripcion.length <=200){
               const data ={
                   com,
                   ent,
                   cloudinary,
                   usr_reg,
                   id_est,
                   id_doc,
                   id_act


               }
               try{
                   const res = (await axios.post('/api/v1/estudiante', data)).data;
                   console.log(res);
                   alert(' Enviadno...');
               }catch(error){
                   console.log(error);
               }
           }else{
            alert('Erro 1502 al enviar!');   
           }
     });
       
})();  