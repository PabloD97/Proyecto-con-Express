import express from 'express';

const router = express.Router();

router.get('/', (request,response)=>{ // request - lo que enviamos : res - lo que express nos responde        
    response.render('inicio')
});

router.get('/nosotros', (request,response)=>{ 

    response.render('nosotros');
});



export default router;