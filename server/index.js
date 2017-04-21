import app from './app';
import routes from './routes/main'


const port = 6600; // detected port to listen on 


app.use('/',routes) // routes 

app.listen(port , () =>
 console.log('Express server listen on ' + port ))