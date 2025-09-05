import mongoose from "mongoose";

const TensorSchema = new mongoose.Schema({    
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true,
    },
    tensor:{},
},{
    timestamps: true
});

export default mongoose.model("tensorModel", TensorSchema);