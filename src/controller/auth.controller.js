import '../db/mysql-connection.js';
import jwt from 'jsonwebtoken';

export const logIn = async (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    const {username, password} = req.body;
    
    db.findUser(req.body.username, req.body.password, (result)=>{
        if(result){
            const token = jwt.sign(req.body, "key");
            res.setHeader('Authorizartion', `${token}`)
            res.status(200).send("Token create")
            console.log("Token Create");
        }else{
            res.status(401).json({token : null, message : 'Invalid credentials'})
        }
    });
}