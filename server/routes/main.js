import express from 'express';

const routes = express()


routes.get('/',(req,res,next) => {
res.send('index')
})


routes.get('/API',(req,res,next) => {
res.send('API')
})

export default routes;