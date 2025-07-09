
import { load } from '@tensorflow-models/universal-sentence-encoder';
import Context from '../models/context.js';

export const getContext = async (req, res) => {
    try {
            const context = await Context.findOne({ user: req.user.id });
            if (!context) {
                return res.status(404).json({ message: "Contexto no encontrado" });
            }
            res.json(context);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error al obtener el contexto" });
        }
}
export const getContextAndPredict = async (req, res) => {
  try {
    const context = await Context.findOne({ user: req.user.id });
    if (!context) {
      return res.status(404).json({ message: "Contexto no encontrado" });
    }
    const prediction = await Prediction(context);
    res.json({ context, prediction });
    console.log(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el contexto o la predicción" });
  }
};
export const Prediction = async () => {
    try{
    const model = await load();
    const inputText = "${context.pais} ${context.estado} ${context.municipio} ${context.experiencia}";
    const embeddings = await model.embed([inputText]);

    return embeddings.arraySync();
    }catch (error) {
        console.error("Error al cargar el modelo o realizar la predicción:", error);
        throw error;
    }

}
