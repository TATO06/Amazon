//alert('modulo de estudiante parcial seleccionado');
(()=>{
    let clasesdata =[];

    let idparcial  = Number(window.location.pathname.split('/')[2]);

    const claseInfo = $('#trabajo'); //referencia de HTML
    const nammeInfo = $('#namme');
    //alert('devolucion devalores', idparcial) ;
    const getUsers = async()=>{
       // let id = Number(Window.location.pathname.split('/')[2]);
        try {
            const clases = await axios.get('/api/v1/estudiante/selectActiParc/'+idparcial) //las actividaddes en la pantalla
            console.log(clases.data);  
            clasesdata = clases.data;
            clasesdata.map(clase => {
            //   claseInfo.append(`<li>${clase.name}</li>`); 
   
            claseInfo.append(`
               <ul>
              <a "> <h5> Esfuerzate y lo lograras, asignación del ${clase.parciales}</h5></a>
               
               <a ">  <h5>Nombre Actividad:  ${clase.nom_actividad}</h5></a>
               
               <a ">  <h5 > Descripción:   ${clase.des_actividad}</h5></a>

               <a href="/tarea/${clase.id_actividad}"> 
               

              
               <div class="text-center "><h4> Presentar Tarea</h4></div
            
               
               <br>
               </br>

            

               </ul>



                            `);   

            });
        } catch (error) { 
            console.error(error);
        }
   
    }
    getUsers();


})();  
/* 

SELECT   CONCAT (paciales.parciales) AS'parciales',
                    CONCAT (paciales .id_parciales) AS'id_parciales',
                    CONCAT (paciales .parciales) AS'parcial',
                    CONCAT (actividades.nombre_actividad) AS'nom_actividad',
                    CONCAT (actividades.descripcion_actividad) AS'des_actividad',
                    CONCAT (actividades.actividad) AS'exa_tarea_actividad',
                    CONCAT (actividades.estado_de_entrega) AS'estado_sin_enviar',
                    CONCAT (actividades.tiempo_actividad) AS'tiempo_act',
                    CONCAT (actividades.fecha_limite) AS'fec_limite',
                    CONCAT (actividades.id_actividad) AS'id_actividad',
                    CONCAT (asignatura.id_asignatura) AS'id_asig',
                    CONCAT (asignatura.nombre_asignatura) AS'nom_asig'

*/