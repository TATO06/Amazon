//alert('modulo de estudiante clase matriculada');
(()=>{
    let clasesdata =[];
    let _id =2;
 
    const claseInfo = $('#userInfo'); //referencia de HTML
   
 
    const getUsers = async()=>{
        try {
            const clases = await axios.get('/api/v1/estudiante/carreraasignatura/'+_id)
            console.log(clases.data);
            clasesdata = clases.data;
            clasesdata.map(clase => {
            //   claseInfo.append(`<li>${clase.name}</li>`); 
               claseInfo.append(`
              
               <div class="col">
               <!-- clase -->
               <div class="col-lg-3 col-6">
               
                   <div class="small-box bg-info">
                   <div class="inner">
                     <h3> ${clase.nom_asignatura}</h3> 
     
                      <h5>sección ${clase.seccion_asignatura}</h5>
                   </div>
                   <div class="icon">
                     <i class="ion ion-bag"></i> 
                   </div>
                   <a href="/clase/${clase.id_asignatura}" class="small-box-footer">Entrar <i class="fas fa-arrow-circle-right"></i></a>
                 </div>   
               </div>
           </div>  
         
            
              
                            
                            `);

            });
        } catch (error) { 
            console.error(error);
        }
   
    }
    getUsers();

})();  
/*             asignatura.nombre_asignatura AS 'nom_asignatura',
        asignatura.id_asignatura AS 'id_asignatura',
        asignatura.seccion  AS 'seccion_asignatura',
        estudiante.id_estudiante AS 'id_estudiante',
        estudiante.numero_cuenta  AS 'num_cuenta' 


                    <div class="small-box bg-info"><!--azul, <div class="small-box bg-success"> verde -->
                    <div class="inner">
                      <h3> ${clase.nom_asignatura}</h3> <!-- <sup style="font-size: 20px"></sup> aplicar con verde-->
                     
                       <h5>sección ${clase.seccion_asignatura}</h5>
                    </div>
                    <div class="icon">
                      <i class="ion ion-bag"></i>  <!-- el color azul, <i class="ion ion-stats-bars"></i> verde -->
                    </div>
                    <a href="/clase/${clase.id_asignatura}" class="small-box-footer">Entrar <i class="fas fa-arrow-circle-right"></i></a>
                  </div>   
                </div>


*/