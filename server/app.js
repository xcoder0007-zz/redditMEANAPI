import express from 'express';
import mongoose from 'mongoose'
import db from './db'


//ES6 Promise
mongoose.Promise = global.Promise // assign mongoose promisse to global one

const app = express();
mongoose.connect(db.url);
mongoose.connection.once('open',()=> {
    console.log('Connection has been made ...')
}).on('error',(error) =>{
console.log('Something went worng ... ',error)
})


export default app;