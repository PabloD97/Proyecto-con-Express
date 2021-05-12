import {Viaje} from '../models/Viaje.js'

const paginaInicio = (request,response)=>{ // request - lo que enviamos : res - lo que express nos responde        
    response.render('inicio',{
        pagina: 'Inicio'
    });
}

const paginaNosotros = (request,response)=>{ 

    response.render('nosotros',{
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (request,response)=>{ 

    // Consultar DB a traves del modelo.
    const viajes = await Viaje.findAll();
    console.log(viajes)

    response.render('viajes',{
        pagina: 'Próximos Viajes',
        viajes
    });
}

const paginaTestimoniales =  (request,response)=>{ 

    response.render('testimoniales',{
        pagina: 'Testimoniales'
    });
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}