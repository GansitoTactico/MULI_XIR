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
    prompt: {
        type: String,
        required: true,

    },
    AI_Response: {
      type: String,
    },
    image: {
      type: String, // guardamos la URL pública
      trim: true,
    }

  },
  {
    timestamps: true,
  }
);

export default mongoose.model("chatBotModel", ResponseSchema);