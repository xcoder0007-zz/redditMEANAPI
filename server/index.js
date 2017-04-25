import app from './app';
import routes from './routes/main'
import bodyParser from 'body-parser'

const port = 3000; // detected port to listen on 

// parse application/json 
app.use(bodyParser.json())

app.use('/', routes) // routes 

app.listen(port, () =>
    console.log('Express server listen on ' + port))