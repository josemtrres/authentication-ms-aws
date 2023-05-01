import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import corsOptions from './config.js';

import authRoutes from './routes/auth.routes.js'

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/', function(req, res){
    console.log(req.body.username, req.body.password);
});

app.use('/api/auth', authRoutes);   

export default app;
