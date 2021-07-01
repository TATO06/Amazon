//alert('modulo de estudiante parciales de las clases matriculada');
(()=>{
    let clasesdata =[];
    //let _id =3;//ingles
    //let _id =6; //matematicas
    //let _id = Number(Window.location.pathname.split('/')[2]);
    let idparcial  = Number(window.location.pathname.split('/')[2]);
  

    const claseInfo = $('#parciales'); //referencia de HTML
    //const coursInfo = $('#cours');
    
 //alert('modulo de estudiante clase matriculada', _id) ;
    const getUsers = async()=>{
       // let id = Number(Window.location.pathname.split('/')[2]);
        try {
            const clases = await axios.get('/api/v1/estudiante/parciales/'+idparcial)
            console.log(clases.data);  
            clasesdata = clases.data;
            clasesdata.map(clase => {
            //   claseInfo.append(`<li>${clase.name}</li>`); 
  

            claseInfo.append(`
                       
                     <div class="col-1">
                       <ul class="mx-auto ">
                       <div class="d-sm-flex align-items-center justify-content-between mb-8">
                         <br>
                         <br>
                           <ul id="nombreclase">
                           </ul>  
                           
                           <li id="sala"  class="breadcrumb""  ><a href="/parciales/${clase.id_parciales}"> ${clase.nom_parcial}</a></li>
                                                             
                       </div>
                       </ul>
                   </div>

                   `);
                   
            });
        } catch (error) { 
            console.error(error);
        }
   
    }
    getUsers();

    
})();  
/* 
SELECT asignatura.id_asignatura AS 'id_asignatura',
        asignatura.nombre_asignatura AS 'nom_asignatura', 
        asignatura.seccion AS 'seccion',
        parciales.parciales AS 'nom_parcial',
        parciales.id_parciales AS 'id_parciales',
        estudiante.numero_cuenta AS 'cuenta',
        estudiante.id_estudiante AS 'id_estudiante'


*/