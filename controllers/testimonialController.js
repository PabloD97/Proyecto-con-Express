import {Comentario} from '../models/Comentarios.js'

const guardarComentario = async (request, response) => {

    // Validar 

    const errores = [];

    const {nombre, correo,mensaje} = request.body;
    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre esta vacio'})
    }
    if(correo.trim() === ''){
        errores.push({mensaje: 'El correo esta vacio'})
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje esta vacio'})
    }

    if(errores.length > 0){
        const testimoniales = await Comentario.findAll();
        //Con que alla un error, vamos a mostrar los errores
        response.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        //Almacenar en la db
        try {
            await Comentario.create({
                nombre,correo,mensaje
            })

            response.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    guardarComentario
}