import User from "../models/modelo-usuario.js";
import bcrypt from "bcryptjs";
import {createAccessToken} from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import {secret} from "../config.js";

export const register = async (req, res) => {
    const {username,email,password} = req.body;

    try{
        const userFound = await User.findOne({email});
        if(userFound) return res.status(400).json(["El email ya esta en uso"]);


        const password_hash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: password_hash,
         });

         const userSaved = await newUser.save();
         const token = await createAccessToken({id: userSaved.id});
         
         res.cookie("token", token);
    
        res.json({
            id: userSaved.id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        });
    }catch{
        res.status(500).json({message: "error al registrarse"});
    }
};

export const login = async (req, res) => {
    const {password,email} = req.body;

    try{
        const TrueUser = await User.findOne({ email });

        if(!TrueUser) return res.status(400).json({message: "user not found"});        

        const Validacion = await bcrypt.compare(password, TrueUser.password);

        if(!Validacion) return res.status(400).json({message: "contraseña incorrecta"});      
         
        const token = await createAccessToken({id: TrueUser.id});
         
        res.cookie("token", token);
    
        res.json({
            id: TrueUser.id,
            username: TrueUser.username,
            email: TrueUser.email,
            createdAt: TrueUser.createdAt,
            updatedAt: TrueUser.updatedAt,
        });


    }catch{
        res.status(500).json({message: "usuario no ingresado"});
    }
};

export const log_out = (req, res) =>{
    res.cookie("token","",{
        expires: new Date(0),
    });
    return res.sendStatus(200);
};

export const profile = async (req, res) =>{
   const userFound = await User.findById(req.user.id);
   if(!userFound) return res.status(400).json({message:"usuario no encontrado"});

   return res.json({
    id: userFound.id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt

   })

   //res.send("profile");
};

export const verify = async (req, res) => {
   const {token} = req.cookies;

   if(!token) return res.status(401).json({message:"no autorizado"});

   jwt.verify(token,secret, async(err, user)=>{

    if(err) return res.status(401).json({message:"no autorizado"});

    const usuario_encontrado = await User.findById(user.id);

    if(!usuario_encontrado) return res.status(401).json({message:"no autorizado"});

    return res.json({
        id: usuario_encontrado._id,
        username: usuario_encontrado.username,
        email: usuario_encontrado.email,
    });
});

};
