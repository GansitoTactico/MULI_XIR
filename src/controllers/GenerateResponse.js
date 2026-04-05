
//import { pipeline, env, AutoModelForCausalLM } from "@xenova/transformers";
import userContext from "../models/context.js";
import ModelAiResponse from  "../models/Response_AI_Model.js";
import chatBotModel from "../models/chatBot_Model.js"
import User from "../models/modelo-usuario.js";
import { queryLMStudio, chatBotQuery } from "../controllers/ChatLLM.js";



export const generateResponse = async (req, res) => {

  try {
    // 1. Validar usuario
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // 2. Obtener datos contextuales (con manejo de errores)
    const [context] = await Promise.all([
      userContext.findOne({ user: user.id }),

    ]);

    if (!context) {
      return res.status(400).json({ error: "Datos incompletos del usuario" });
    }


    const prompt = `
      Usuario: ${user.username}
      País: ${context.pais}
      Estado: ${context.estado}
      Municipio: ${context.municipio}
      Experiencia: ${context.experiencia}
    `;
    const response = await queryLMStudio(prompt);

    const newResponse = new ModelAiResponse({
      user: user.id,
      prompt,
      AI_Response: response,
    });

    await newResponse.save();

    // 7. Responder
    res.json({
      id: newResponse.id,
      prompt: newResponse.prompt,
      AI_Response: newResponse.AI_Response,
      user: {
        id: user.id,
        username: user.username
      },
      createdAt: newResponse.createdAt
    });

  } catch (error) {
    console.error("Error en generateResponse:", error);
    res.status(500).json({
      error: "Error al generar respuesta",
      details: error.message
    });
  }
}
export const createChatBotResponse = async (req, res) => {
  try{
    const context = await userContext.findOne({ user: req.user.id });
    const { prompt } = req.body;

    const user = await User.findById(req.user.id);
    if(!user){
      return res.status(401).json({ message: "usuario no encontrar "});
    }

    if(!prompt){
      return res.status(401).json({ error: "No hubo mensaje intenta de nuevo" })
    }
    console.log(user.username);
    const propuesta = `Usuario: ${user.username} Pregunta: ${prompt}`;
    const response = await chatBotQuery(prompt, context, user);

    const newResponse = new chatBotModel({
      user: req.user.id,
      username: user.username,
      AI_Response: response,
      prompt: propuesta,
    })

    await newResponse.save();

    res.json({
      user: newResponse.user,
      username: newResponse.username,
      AI_Response: newResponse.AI_Response,
      prompt: newResponse.prompt,

    })

  }catch(error){
    console.error("Error en createChatBotResponse:", error);
  }
}

export const GetLLMResponse = async (req, res) => {
  try{
    const LLMResponse = await ModelAiResponse.find({ user: req.user.id }).populate("user");
    res.json(LLMResponse);

    if (!LLMResponse) {
      return res.status(404).json({ message: "No response found" });
    }

  }catch (error){
    console.error('Error al obtener la respuesta LLM:', error);
    throw error;
  }

}
export const GetChatBotResponse = async (req, res) => {
  try{
    const chatBotResponse = await chatBotModel.find({ user: req.user.id }).populate("user");
    res.json(chatBotResponse);

    if(!chatBotResponse){
      return res.status(404).json({ message: "No response found" });
    }
  }catch(error){
    console.log("fallo al encontrar las respuestas del chat bot", error)
  }
}
