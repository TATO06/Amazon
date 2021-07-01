exports.pantalla_nuevoMjs = (req, res) => {
    res.render('modulos/modulo-ticket/nuevoMjs', {
        nombrePagina: 'nuevo_mensaje',
        registroNuevoMensaje: true
    })
}
//pantalla de mensajes de usuario
exports.pantalla_ticket= (req, res) => {
    res.render('modulos/modulo-ticket/mensaje', {
        nombrePagina: 'mensajes',
        ticketsMensajes: true
    })
}
//pantalla responder mensaje
exports.pantalla_responderticket= (req, res) => {
    res.render('modulos/modulo-ticket/respondermjs', {
        nombrePagina: 'respondermjs',
        ticketsResponderMensajes: true
    })
}