
   //construcion de las pantallas

             //pantalla de las clases Clases_Matriculadas
exports.pantalla_matriculadas = (req, res) => {
        res.render('modulos/estudiante/matriculas', {
        nombrePagina: 'Clases Matriculdas',
        Clases_Matriculadas: true
    })
}

                //pantalla de una clase
exports.pantalla_clases = (req, res) => {
    res.render('modulos/estudiante/clases', {
    nombrePagina: 'clase ',
    Clase_enCurso: true
})
}

                //pantalla del estado de la entrega
exports.pantalla_entregas = (req, res) => {
    res.render('modulos/estudiante/entregas', {
    nombrePagina: 'entregas',
    Entrega_Trabajo: true
})
}

                 //pantalla del estado de los trabajo
exports.pantalla_tareas = (req, res) => {
    res.render('modulos/estudiante/tareas', {
    nombrePagina: 'Tareas Pendientes',
    Tareas_Pendientes: true
})
}


                 //pantalla del parcial seleccionado
exports.pantalla_parciales = (req, res) => {
    res.render('modulos/estudiante/parciales', {
    nombrePagina: 'Parciales',
    Parciales_Clase: true
})
}

