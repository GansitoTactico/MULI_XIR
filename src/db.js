import mongoose from "mongoose";


export const connectdb = async() => {
    try{    
        await mongoose.connect("mongodb://localhost/web");
        console.log("MongoDB Conectado");
    }catch(error){
        console.log(error);
    }
}
