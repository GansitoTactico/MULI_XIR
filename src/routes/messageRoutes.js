import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import multer from "multer";
import path, {  } from "path";
import { fileURLToPath } from "url";
import process from "process";
import MessageModel from "../models/message_Model.js";
import User from "../models/modelo-usuario.js";

const router = Router();
const __filename = fileURLToPath(import.meta.url);



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "uploads"));
  },
    filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});



const upload = multer({ 
  storage,
  limits: { fileSize: 25 * 1024 * 1024 } 
});

router.post("/createMessage", authRequired, upload.single("image"), async (req, res) => {

  try {
    const { message, user } = req.body;

    if (!message || !user) {
      return res.status(400).json({ message: "Message and user are required" });
    }   
    const userFound = await User.findById(req.user.id);       
    console.log(userFound);

    const newMessage = new MessageModel({
      user: req.user.id,   
      username: userFound.username,   
      message,
      image: req.file ? `/uploads/${req.file.filename}` : null
    });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);

  } catch (error) {
    console.error('Create message error:', error);
    res.status(500).json({ 
      message: "Error creating message",
      error: error.message,
    });
  }
});
router.get("/getMessages", authRequired, async (req, res) => {
  try {
    const respuesta = await MessageModel.find();
    res.json(respuesta);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching messages" });
  }
})


export default router;
