import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema({    
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true,
    },
    prompt:{},
    AI_Response:{},
},{
    timestamps: true
});

export default mongoose.model("ModelAiResponse", ResponseSchema);