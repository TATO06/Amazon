
//alert('mensaje enviado')
(()=>{
   
  let userData =[];
  const userInfo = $('#userInfo');
  let id  = 1;
  
  const getMensajes= async()=>{
      try {
          const mensajes = await axios.get('/api/v1/mensaje/'+id);
          console.log(mensajes.data);
          userData = mensajes.data;
          userData.map(data =>{
              userInfo.append(`
              <tr>
              <td class="mailbox-name"><a href= "/responder/${data.id}">${data.name}</a></td>
               <td class="mailbox-subject">${data.messages}</td>
               <td class="mailbox-date">${data.date}</td>
               <td><button id="deleteTicket" type="button" class="btn btn-danger" data-id="${data.id}">
               Eliminar</button></td>      
              </tr>`);

            
          });
      } catch (error) {
          console.error(error);
      }

  }
  getMensajes();

  const btnDelete = document.getElementById('deleteTicket');

 btnDelete.addEventListener('click', async function(e){

      let idMsg= $(this).data('id');
      try {
        const res = axios.delete('api/v1/mensaje/delete/'+idMsg);
        console.log(res);
        alert('mensaje Eliminado!');
      } catch (error) {
          console.log(error);
      }
     
       
  });


 


 

 


})();



