
(()=>{
                           //Validacion para el formulario
    $('#subir').on('submit', function(evento){  //llamo la variable del formulario
      evento.preventDefault(); //evita que la pagina se recargue  
      
        const descripcion = $('#descripcion').val(); //estoy llamando los imput y me trae el valor que tienen ellos
        
        
                if(descripcion != ''  ){
                    alert('Enviando...');
              }else{  
               alert('complete todos los campos');   
              }  
        
            })  


 
 })();  