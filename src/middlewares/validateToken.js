import jwt from "jsonwebtoken";
import {secret} from "../config.js";

export const authRequired = (req , res , next) =>{
    const {token} = req.cookies;

    if(!token)
    return res.status(401).json({message: "No existe un token, acceso denegado"});

    jwt.verify(token, secret,(err,user) => {
        if(err) return res.status(403).json({message: "Usuario no verificado"});

        req.user = user;
       
        next();

    }); 
    
    
}