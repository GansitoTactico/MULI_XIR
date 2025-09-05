import MessageModel from "../models/message_Model.js";
import fs from "fs";


export const createMessage = async (req , res) => {    
    try{
    const { message, image } = req.body;

    const imageBuffer = fs.readFileSync(image);

    const newMessage = new MessageModel({        
        message,
        imageBuffer,
        user: req.user.id,
    });
    const messageSave = await newMessage.save();
    res.json(messageSave);

    }catch(error){
        console.error(error);
        res.status(500).json({message: "Error al crear el mensaje"});
    }
}