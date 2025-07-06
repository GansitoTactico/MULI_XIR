import Context from '../models/context.js';

export const postContext = async (req, res) => {
    try{
        const { pais, estado, municipio, experiencia } = req.body;

    const newContext = new Context({
        pais,
        estado,
        municipio,
        experiencia, 
        user: req.user.id, // Asegúrate de que req.user esté definido y contenga el ID del usuario autenticado
    });
    
    const contextSaved = await newContext.save();

    res.json({
        id: contextSaved.id,
        pais: contextSaved.pais,
        estado: contextSaved.estado,
        municipio: contextSaved.municipio,
        experiencia: contextSaved.experiencia,
        user: contextSaved.user,
        createdAt: contextSaved.createdAt,
        updatedAt: contextSaved.updatedAt,
    });
    console.log(req.user.id);
    }catch{
        res.status(500).json({message: "Error al crear el contexto"});
    }

}
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