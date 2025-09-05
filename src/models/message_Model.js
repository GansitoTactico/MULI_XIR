import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },     
    username: {
      type: String,
      trim: true,
    },
    message: {
      type: String, 
      require: true,
      
    },
    image: {
      type: String, // guardamos la URL pública
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("MessageModel", ResponseSchema);