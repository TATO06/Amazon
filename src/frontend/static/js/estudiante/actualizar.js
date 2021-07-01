
(()=>{
                    //validacion para actualizar un trabajo ya entregado
var actualiza = document.getElementById('actualiza');
error.style.color = 'red';

function actualizar(){
    console.log('Actualizando...');

    var mesajesErro = [];
    
    if(actualiza.Value === null  ||actualiza.Value === '') {
        mesajesErro.push('No se puede actualizar porque no ha entregado la asignacion');
    }    
    error.innerHTML =  mesajesErro.join(', ');
    }


    
})();  

