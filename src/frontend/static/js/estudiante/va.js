
(()=>{
    const subir = document.getElementById('subir'); 
   const inputs = document.querySelectorAll('#subir input');

 imputs.forEach((input) => {                   // valido todos los input que tengo en el formulario
     input.addEnetListener('keyup', () =>  {   // y al levantar una tecla me dice que no
         console.log('maus fuera de rango');   // la tengo posiciona en donde debo
     });
 });
   formulario.addEnetListener('submit', (e) =>{
        e.preventDefault();
   })

 })();  