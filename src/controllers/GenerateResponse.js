
//import { pipeline, env, AutoModelForCausalLM } from "@xenova/transformers";
import userContext from "../models/context.js";
import ModelAiResponse from  "../models/Response_AI_Model.js";
import User from "../models/modelo-usuario.js";
import { queryLMStudio } from "../controllers/ChatLLM.js";



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

export const GetLLMResponse = async (req, res) => {
  try{
    const LLMResponse = await ModelAiResponse.findOne({ user: req.user.id }).populate("user");
    res.json(LLMResponse.AI_Response);

    if (!LLMResponse) {
      return res.status(404).json({ message: "No response found" });
    }
    
  }catch (error){
    console.error('Error al obtener la respuesta LLM:', error);
    throw error;
  }

}
