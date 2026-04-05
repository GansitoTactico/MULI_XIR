import mongoose from "mongoose";

const DistribuitorDataSchema = new mongoose.Schema({
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true,
    },
    nombreDistribuidora: {
        type: String,
        require: true,
    },
    direccionDistribuidora: {
        type: String,
        require: true,
    },
    cantidadRecibida: {
        type: String,
        require: true,
    },
    estadoDeEnvio: {
        type: String,
        require: true,
    }
}
)

export default mongoose.model("DistribuitorDataSchema", DistribuitorDataSchema);

