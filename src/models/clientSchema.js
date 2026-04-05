import mongoose from "mongoose";

const clientDataSchema = new mongoose.Schema({
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true,
    },
    jugosidadFruta: {
        type: String,
        require: true,
    },
    calidadFruta: {
        type: String,
        require: true,
    },
    opinionFruta: {
        type: String,
        require: true,
    },
    sugerenciasMejora: {
        type: String,
        require: true,
    }
}
)

export default mongoose.model("clientDataSchema", clientDataSchema);