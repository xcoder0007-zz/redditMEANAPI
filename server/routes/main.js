import express from 'express';
import mainCtrl from './../controllers/main';

const routes = express()


routes.get('/',mainCtrl.index)


routes.get('/API', (req, res, next) => {
    res.send('API')
})

export default routes;