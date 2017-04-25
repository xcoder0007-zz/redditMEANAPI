import express from 'express';
import mainCtrl from './../controllers/main';
import userCtrl from './../controllers/users';

const routes = express()


routes.get('/',mainCtrl.index)
routes.get('/api',mainCtrl.api)
routes.post('/api/signup',userCtrl.post)

export default routes;