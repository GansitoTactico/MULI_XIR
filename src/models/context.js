import mongoose from "mongoose";

const contextSchema = new mongoose.Schema({    
    pais: {
        type: String,
        required: true,
        trim: true,
    },
    estado: {
        type: String,
        required: true,
        trim: true       
    },
    municipio: {
        type: String,
        required: true,
        trim: true
    },   
    experiencia: {
        type: String,
        required: true,
        trim: true
    },
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true,
    },
},{
    timestamps: true
});

export default mongoose.model("userContext", contextSchema);
/*pais
estado
municipio
experiencia*/