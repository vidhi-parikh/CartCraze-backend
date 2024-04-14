import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';

import bodyparser from 'body-parser'


import cors from 'cors'


dotenv.config({
    path: '../.env'
});

dotenv.config();

connectDB();

const app = express();
app.use(cors())

app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }))

app.use(express.json())


const PORT = process.env.PORT || 2000;

app.listen(PORT);
