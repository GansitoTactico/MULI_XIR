import { pipeline } from "@xenova/transformers"
import User from "../models/modelo-usuario.js";
import userContext from "../models/context.js";


export default class LLMService {
  static async generateUserSummary(userId) {
    const user = await User.findById(userId);
    const res = await userContext.findById(userId);

    const tensor = user.analysis.lastTensor;

    // Cargar modelo solo cuando se usa (singleton)
     try {
      if (!this.model) {
        this.model = await pipeline('text-generation', 'Xenova/distilgpt2');
      }
    } catch (error) {
      console.error("Error al cargar el modelo:", error);
      
    }

    // Crear prompt único por usuario
    const prompt = `
      Usuario: ${user.username}
      pais: ${JSON.stringify(res.pais)}
      estado: ${JSON.stringify(res.estado)}
      municipio: ${JSON.stringify(res.municipio)}
      experiencia: ${JSON.stringify(res.experiencia)}
      Tensor: [${tensor.slice(0, 5)}...] (${tensor.length} valores)
      Escribe una serie de recomendaciones y noticias que le puedan interesar a este usuario segun sus
      especificaciones regionales.
    `;

    // Generar texto
    const output = await this.model(prompt, {
      max_new_tokens: 100,
      temperature: 0.7,
      repetition_penalty: 1.5
    });

    return output[0].generated_text;
  }
}