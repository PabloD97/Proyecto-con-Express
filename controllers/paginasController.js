import {Viaje} from '../models/Viaje.js'
import {Comentario} from '../models/Comentarios.js'

const paginaInicio = async (request,response)=>{ // request - lo que enviamos : res - lo que express nos responde        
    
    // consultar 3 viajes del modelo Viaje
    try {
        const viajes = await Viaje.findAll({limit: 3})
        response.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes
        });
    
    } catch (error) {
        console.log(error)
    }
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

const paginaTestimoniales = async (request,response)=>{ 

    try {
        const testimoniales = await Comentario.findAll();

        response.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        });    
    } catch (error) {
        console.log(error);
    }
    
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (request,response) => {

    const {slug} = request.params;
    try {
        const viaje = await Viaje.findOne({where : { slug }});
        
        response.render('viaje',{
            pagina: 'Informacion Viaje',
            viaje
        })

    } catch (error) {
        console.log(error)
    }

}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}