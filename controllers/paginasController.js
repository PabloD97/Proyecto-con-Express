
const paginaInicio = (request,response)=>{ // request - lo que enviamos : res - lo que express nos responde        
    response.render('inicio',{
        pagina: 'Inicio'
    });
}

export {
    paginaInicio
}