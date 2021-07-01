(()=>{

    let userDatos =[];
    const Info = $('#messages');  // id para desplegar los mensajes
    const title = $('#titleTicket'); // id de title
    const Image =$('#img-preview'); // id del campo img
    const dateT = $('#fecha-ticket'); 
    let idMensaje  = Number(window.location.pathname.split('/')[2]);//traer el id dado de la pantalla  mensaje

   let IdPerson2 = []; // variable para guardar el id de la persona a responderle el ticket
    const getMensajeinfo= async()=>{//mostrar datos del mensaje en la pantalla
        try {
            const mensajes = await axios.get('/api/v1/mensaje/mjs/'+idMensaje);
            console.log(mensajes.data);
            const idPersona = Number(mensajes.data[0].id_persona); //guardamos en una constante el id de la persona
            IdPerson2 = idPersona; // despues la guardamos en la variable definida afuera de la funcion
            userDatos = mensajes.data;
            userDatos.map(data =>{
                title.append(`<h3 class="card-title"> <i>Ticket No.</i> <b>${data.id_mensaje}</b> </h3>`)
                Info.append(`<p>De: <b>${data.name}</b><p>`);
                Info.append(`<p>${data.message}</p>`);
                Image.append(`<img src="${data.photo}">`)
                dateT.append(`<p><i>${data.date}</i></p>`);
                

    
              
            });
        } catch (error) {
            console.error(error);
        }
    
    }
    getMensajeinfo();


   

 


 let ruta=[];// variable para el almacenamiento de la ruta de imagen
//subida de la imagen a un servidor externo
 const imageview =document.getElementById('img-view');
  const imageUploader = document.getElementById('phototicket');
  const claudinary_url ='https://api.cloudinary.com/v1_1/sistemadecalificaciones/image/upload'; //url de nuestro servidor externo de img
  const cloudinary_preset = 'qcb5f5uu';

  imageUploader.addEventListener('change', async (e)=>{
       const file = e.target.files[0];

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', cloudinary_preset);

      const res = await axios.post(claudinary_url, formData,{
      headers: {
               'Content-Type': 'multipart/form-data'
           }
       });
        console.log(res);
        imageview.src = res.data.secure_url;
       ruta = res.data.secure_url;


  });

//guardar los datos del formulario a la BD   
    $('#responderMensaje').on('submit', async function(evento){
        evento.preventDefault(); //cancela que la pagina se recargue
        
    
        const descripcion = $('#descripcionMensaje').val();
        const almacenamiento = String(ruta);
        const person1 = 1;
        const person2 = IdPerson2;
        const asig = 5;
        //alert (typeof descripcion);
      
        if(descripcion.length >= 4 && descripcion.length <=200){
            const data ={
                descripcion,
                almacenamiento,
                person1,
                person2,
                asig
            }
            try{
                const res = (await axios.post('/api/v1/mensaje', data)).data;
                console.log(res);
                alert('Mensaje Enviado!');
            }catch(error){
                console.log(error);
            }
        }else{
         alert('Algo salio mal!');   
        }
  });
    


})();  