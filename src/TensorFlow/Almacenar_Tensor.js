import { generateUserTensor } from "../TensorFlow/Tensores.js"
import Context from "../models/modelo-usuario.js";
import tensorFlow_model from "../models/tensorFlow_model.js";

// esta funcion guarda el tensor generado en base a la informacion del usuario
// para mandarlo al backend y utilizarlo en el endpoint.

export default async function saveUserTensor(req,next) {
    const userId = req.user.id;

    if (!userId) {
        throw new Error('Se requiere un ID de usuario válido');
    }

    try {
        // Generar y transformar el tensor
        const rawTensor = await generateUserTensor();
        const storableTensor = JSON.parse(JSON.stringify(rawTensor));

        function tensorToPlainObject(storableTensor) {
        return {
        data: storableTensor.data, // Suponiendo que estas propiedades existen
        shape: storableTensor.shape,
        // otras propiedades necesarias
    };
}
        const tensor = await tensorToPlainObject(storableTensor);
        console.log(tensor);

        if (!tensor) {
            throw new Error('No se pudo generar el tensor del usuario');
        }

        const result = await Context.updateOne(
            { user: userId },
            { $set: { 'Tensor': tensor } }
        );
        console.log(result);
        

        if (result.modifiedCount === 0) {
            console.warn(`No se modificó ningún documento para el usuario ${userId}`);
            return false;
        }
        next();
        
        return true;
    } catch (error) {
        console.error(`Error al guardar el tensor para el usuario ${userId}:`, error);
        throw new Error('Error al procesar los datos del tensor');
    }    
}

export const saveTensor = async (req,res,next) => {
    const { tensor } = req.body;

    try{
        const newTensor = new tensorFlow_model({
        user: req.user.id,
        tensor,
    });

    const tensorSaved = await newTensor.save();

    res.json({
        id: tensorSaved.id,
        tensor: tensorSaved.tensor,
        user: tensorSaved.user,
        createdAt: tensorSaved.createdAt,
        updatedAt: tensorSaved.updatedAt,
    })
    next();
    }catch{
        res.status(500).json({message: "Error al crear el tensor"});
        
    }

}