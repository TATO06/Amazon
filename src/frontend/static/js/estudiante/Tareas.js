//alert('modulo de estudiante Estado de la tarea');
(()=>{
    let estadosdata =[];
    //let _id =1;

    let idtarea  = Number(window.location.pathname.split('/')[2]);

    //alert('alerta de que trae el idtarea', idtarea);
    const estadoInfo = $('#estado'); //referencia de HTML
    const descripInfo = $('#descrip');
    const botonInfo = $('#boton');
    const clasetaInfo = $('#claseta');
 
    const getUsers = async()=>{
        try {
            const estados = await axios.get('/api/v1/estudiante/trabajo/'+idtarea)
            console.log(estados.data);
            estadosdata = estados.data;
            estadosdata.map(estado => {
            estadoInfo.append(`
            
            <tr>
            <td class="mailbox-subject">${estado.estado}</td>
             <td class="mailbox-subject">${estado.entrega}</td>
             <td class="mailbox-date">${estado.fecha_entrega}</td>
             <td class="mailbox-subject">${estado.com_act}</td>
             </tr>  
            `); 
            descripInfo.append(`

            <ul  class="mx-auto-">
            
            <h1 class="h3 mb-0 text-gray-800">${estado.nom_actividoce}</h1>
                
                <b>${estado.descripcion}  </b>
           </ul>

            `); 
            clasetaInfo.append(`
            <li class="breadcrumb-item active"><a href="#">${estado.nom_asignatura}</a></li>
            `);
            botonInfo.append(`
            <button id="borrar" onclick=" borrar();" class="btn btn-danger">Borrar</button> 
            <button id="actualizar"  onclick="actualiza();" href="/entrega" class="btn btn-danger">Editar</button> 
         
            
            `);

            });
        } catch (error) { 
            console.error(error);

        }
   
    }
    getUsers();

})();  

/*
         botonInfo.append(`
            <button id="borrar" onclick=" borrar();" class="btn btn-danger">Borrar</button> 
            <button id="actualizar"  onclick="actualiza();" href="/entrega" class="btn btn-danger">Editar</button> 
         
            
            `);





                      SELECT actividades.nombre_actividad AS 'nom_actividoce',
       actividades.descripcion_actividad AS 'descripcion',
       actividades.id_actividad AS 'id_actividad',
        entrega_actividad.id_entrega AS 'id_entrega',
        entrega_actividad.comentario_actividad AS 'com_act',
        entrega_actividad.entrega_actividad AS 'entrega',
        entrega_actividad.cloudinary AS 'cloud',
        entrega_actividad.fecha_entrega AS 'fecha_entrega',
        entrega_actividad.estado_actividad AS 'estado'
        */
