import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes';
import dotenv from 'dotenv';
import './db';

dotenv.config();
const port = process.env.PORT || 7000;

console.log('iniciando servidor')

// initializations
const app = express();

// settings
app.set('port', port);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/', router);

export default  app;