import express from 'express';
import mongoose from 'mongoose'
import db from './db'

const app = express();
mongoose.connect(db.url) // db URL init 


export default app;