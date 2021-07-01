(()=>{

             //validacion para que no se pueda entregar vacio
var descripcion = document.getElementById('descripcion');
var error = document.getElementById('error');
error.style.color = 'red';

function enviando(){
    console.log('');

    var mesajesErro = [];

    
    if(descripcion.Value === null  || descripcion.Value === '') {
        mesajesErro.push('Ingresa una descripción');
    }

    error.innerHTML =  mesajesErro.join(', ');

    return false;

}


















   // var subir = document.getElementById('subir');
    //subir.addEventListener('submit', function(event) {
      //    event.preventDefault();
        //  alert('kevin');
       //   var mesajesErro = [];
    
         // if(fichero.Value === null  ||fichero.Value === '') {
           //   mesajesErro.push('selecciona un archivo');
         // }
          
          //if(descripcion.Value === null  || descripcion.Value === '') {
            //  mesajesErro.push('Ingresa una descripción');
         // }
      
          //error.innerHTML =  mesajesErro.join(', ');
   // });
    
    
 










  

    // var subir = document.getElementById('subir');
     //subir.addEventListener('submit', function(event) {
       //    event.preventDefault();
         //  alert('kevin');
        //   var mesajesErro = [];
     
          // if(fichero.Value === null  ||fichero.Value === '') {
            //   mesajesErro.push('selecciona un archivo');
          // }
           
           //if(descripcion.Value === null  || descripcion.Value === '') {
             //  mesajesErro.push('Ingresa una descripción');
          // }
       
           //error.innerHTML =  mesajesErro.join(', ');
     //});
     
     
  /*
 
 


(()=>{

    $('#subir').on('submit',function(ver){  //llamo la variable del formulario
      EventSource.preventDefault(); //evita que la pagina se recargue  
      
        const descripcion = $('#descripcion').val(); //estoy llamando los imput y me trae el valor que tienen ellos
        const fichero = $('#fichero').val(); 
        
                if(descripcion != '' && fichero != '' ){
                    alert('Enviando...');
              }else{  
               alert('complete todos los campos');   
              }  
        
            })  
*/

})();  