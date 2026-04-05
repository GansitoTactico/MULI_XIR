import TrackerSchema from "../models/Tracker_Model.js";

export const createNewTracker = async (req, res) => {
    try{
        const {titulo, Lote, parcela, tipoCultivo, toneladasCultivadas} = req.body;

        const Tracker = new TrackerSchema({
            titulo,
            Lote,
            parcela,
            tipoCultivo,
            toneladasCultivadas,
            user: req.user.id,
        });

        const newTracker = await Tracker.save();
        res.json(newTracker);

    }catch(error){
        console.log(error)
    }
}