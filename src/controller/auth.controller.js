import '../db/mysql-connection.js';
import jwt from 'jsonwebtoken';
import { db } from '../db/mysql-connection.js';
import path from 'path';

export const logIn = async (req, res)=>{
    const {username, password} = req.body;

    db.findUser(username, password, (result)=>{
        if(result){
            const token = jwt.sign(req.body, "key");
            res.setHeader('Authorizartion', `${token}`);
            res.status(200).send("Token create");
            console.log("Token Create");
        }else{
            res.status(401).json({token : null, message : 'Invalid credentials'});
        };
    });
};