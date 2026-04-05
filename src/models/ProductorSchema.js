import mongoose from "mongoose";

const ProductorDataSchema = new mongoose.Schema({
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true,
    },
    nombreProductor: {
        type: String,
        require: true,
    },
    direccionProductor: {
        type: String,
        require: true,
    },
    Destinario: {
        type: String,
        require: true,
    },
    estadoDeEnvio: {
        type: String,
        require: true,
    }
}
)

export default mongoose.model("ProductorDataSchema", ProductorDataSchema);