import express from 'express';

const router = express.Router();

router.get('/', (request,response)=>{ // request - lo que enviamos : res - lo que express nos responde
    const textInicio = 'Este es el inicio';
        
    response.render('inicio',{
        textInicio
    })
});

router.get('/nosotros', (request,response)=>{ 
    const viajes = 'Viaje a Alemania';

    response.render('nosotros', {
	textoViajes: viajes
	});
});



export default router;