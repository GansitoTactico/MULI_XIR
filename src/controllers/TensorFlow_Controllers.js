import * as tf from '@tensorflow/tfjs';
import { load } from '@tensorflow-models/universal-sentence-encoder';


export const Prediction = async (req, res) => {
    const informacion = req.context.informacion;
    const model = load();

    try {
        const inputTensor = tf.tensor(informacion);
        const prediction = model.predict(inputTensor);
        res = prediction;
        return res.dataSync();
        } catch (error) {
        console.error("Error al hacer la predicción:", error);
        throw error;
        } 

}
console.log(Prediction());