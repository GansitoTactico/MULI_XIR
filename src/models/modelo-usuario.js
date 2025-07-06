import mongoose from "mongoose";


const modelo_usuario = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        Trim: true
    },
    email:{
        type: String,
        require: true,
        Trim: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
        Trim: true
    }    
},{
    timestamps: true
});

export default mongoose.model("User", modelo_usuario);