import * as tf from "@tensorflow/tfjs";
import Context from '../models/context.js';
//import { pipeline } from "@xenova/transformers";
import tensormodels from "../models/tensorFlow_model.js";
import { load } from '@tensorflow-models/universal-sentence-encoder';

// en estas lineas se obtiene el contexto del usuario
export const generateUserTensor = async (req, res, next) => {

  try{
  const user = req.user || (req.session && req.session.user);

  if (!user || !user.id) {
    const error = new Error('Usuario no disponible en el request');
    error.statusCode = 401;
    return next(error);
  }

  // Usa user.id en lugar de req.user.id directamente
  const datos = await Context.findOne({ user: user.id });
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(datos);
  if (!datos){

    throw new Error('Usuario no encontrado');
  };

  // Crea características numéricas para los datos del documento JSON
  const caracteristicas = {
    pais: datos.pais,
    estado: datos.estado,
    municipio: datos.municipio,
    experiencia: datos.experiencia,
  };


  // Convertir los datos numericos en un tensor de dos dimensiones
  const tensor = tf.tensor2d(
    [Object.values(caracteristicas)],
    [1, Object.keys(caracteristicas).length]  // Shape: [1, 3]
  );

  async function processText() {

  const model = await load();

  const texts = tensor.arraySync()[0];

  const embeddings = await model.embed(texts);

  console.log(embeddings.shape);

  const avgEmbedding = embeddings.mean(0);

  return avgEmbedding;
}
  console.log(processText());
  const embedding = await processText();

  // se normalizan los valores numericos de entrada para aumentar su eficiencia escalandolos
  const normalizedTensor = embedding.div(tf.scalar(2));
  const data = await normalizedTensor.array();
  console.log(data);

  console.log(normalizedTensor);
  console.log(data);

  const newTensor = new tensormodels({
    user: user.id,
    tensor: normalizedTensor,
  });
  const saveTensor = await newTensor.save();

  res.json({
    id: saveTensor.id,
    tensor: saveTensor.tensor,
    user: saveTensor.user,
    createdAt: saveTensor.createdAt,
    updatedAt: saveTensor.updatedAt,
  })
  console.log(res.json);

  next();

  }catch(error){
    console.error(error);

  }

}
/*return {
    tensor: await normalizedTensor.array(),
    metadata: {
      datos,
      generatedAt: new Date(),
      featuresUsed: Object.keys(caracteristicas)

    }
  };*/
