

(()=>{
 /*                              //validacion para actualizar un trabajo ya entregado
    var nombre = document.getElementById('nombre');
error.style.color = 'red';

function borrar(){
    console.log('Borrando...');

    var mesajesErro = [];

    if(nombre.Value === null  ||nombre.Value === '') {
        mesajesErro.push('No tiene trabajo que borrar');
    }
    
    error.innerHTML =  mesajesErro.join(', ');

    return false;
}
*/











//let _id =''

var charged = false; // variable "FLAG" que controlará si el dom está cargado, flag se denomina porque funciona como un "controlador" para nosotros, ya que cuando esta este en true, significa que el documento cargó
window.addEventListener("DOMContentLoaded",() =>{charged = true;}); // Comprobamos si el documento está cargado.
var i = 0;
function Añadir() {
    var div;
    if(charged) div = document.getElementById('borrar'); // meteremos en un div con id tareas
	i = i + 1;
	var it = document.createElement("INPUT");
	var c = document.createElement("INPUT");
	var p = document.createElement('p');
	c.setAttribute("type", "checkbox");
	c.setAttribute("id", "cb");
    it.setAttribute("type", "text");
    it.setAttribute("size", "40");
    it.setAttribute("id", i);
    div.appendChild(it); // las coloco en el div 
	div.appendChild(c);
	div.appendChild(p);
    document.getElementById(i).placeholder = "presentar tarea";
}
var tareasEliminadas = 0; // cantidad de tareas eliminadas
function Quitar() {
   var div; 
    if(charged) div = document.getElementById("tareas"); // el div
  var inputs = document.getElementsByTagName("INPUT");
    if(tareasEliminadas > inputs.length-1) {console.log("No tienes tareas creadas..");
    return;
    }
  tareasEliminadas++; // sumo
  inputs[inputs.length-tareasEliminadas].style.display = "none"; 
  tareasEliminadas++; // sumo
  inputs[inputs.length-tareasEliminadas].style.display = "none";
  console.log("Tarea eliminada..");
}













})();  