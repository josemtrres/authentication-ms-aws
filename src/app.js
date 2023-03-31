import express from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js'
//import {verifyToken} from './middleware/verify.tkn.js'; // para que front pueda saber si el token es valido durante las sesion

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', authRoutes);   

export default app;
