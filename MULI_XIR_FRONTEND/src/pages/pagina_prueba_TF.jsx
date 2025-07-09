import * as tf from "@tensorflow/tfjs";
import { load } from "@tensorflow-models/universal-sentence-encoder";

import { useEffect, useState } from "react";

function pagina_prueba_TF() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [predictions, setPredictions] = useState(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const loadModel = async () => {
      const modelUSE = await load();
      const userInput = "Me gusta viajar a lugares con playa y...";
      const embedding = await modelUSE.embed([userInput]);

      // Añadir capas LSTM para predicción
      const VOCAB_SIZE = 3; // Cambiado a 3 para que coincida con las categorías
      const textModel = tf.sequential({
        layers: [
          tf.layers.lstm({ units: 256, inputShape: [1, 512] }),
          tf.layers.dense({ units: VOCAB_SIZE, activation: "softmax" }),
        ],
      });
      // Ajustar la forma del embedding: [batch, timesteps, features] => [1, 1, 512]
      const embeddingArray = await embedding.array();
      const embeddingTensor = tf.tensor3d(
        [embeddingArray[0], [0], [0]],
        [1, 1, 512]
      );
      const nextWord = textModel.predict(embeddingTensor);
      const res = await nextWord.data();
      const resultArray = Array.from(res);
      console.log(resultArray);

      const categories = ["Negativo", "Neutral", "Positivo"];
      const predictedIndex = resultArray.indexOf(Math.max(...resultArray));

      setPredictions({
        class: categories[predictedIndex],
        confidence: resultArray[predictedIndex],
      });
    };
    loadModel();
  }, []);
  return (
    <div>
      {predictions ? (
        <div>
          <p>Clase: {predictions.class}</p>
          <p>Confianza: {predictions.confidence}</p>
        </div>
      ) : (
        <p>Cargando predicción...</p>
      )}
    </div>
  );
}

export default pagina_prueba_TF;
