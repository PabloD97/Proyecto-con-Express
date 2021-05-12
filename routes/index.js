import express from 'express';
import {paginaInicio} from '../controllers/paginasController.js'

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', (request,response)=>{ 

    response.render('nosotros',{
        pagina: 'Nosotros'
    });
});

router.get('/viajes', (request,response)=>{ 

    response.render('viajes',{
        pagina: 'Viajes'
    });
});

router.get('/testimoniales', (request,response)=>{ 

    response.render('testimoniales',{
        pagina: 'Testimoniales'
    });
});



export default router;