import mongoose from "mongoose";

const ProcessSchema = new mongoose.Schema({
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true,
    },
    titulo : {
        type: String,
        require: true,
    },
    Lote: {
        type: String,
        require: true,
    },
    parcela: {
        type: String,
        require: true,
    },
    tipoCultivo: {
        type: String,
        require: true,
    },
    toneladasCultivadas: {
        type: Number,
        require: true,
    }

},{
    timestamps: true
});

export default mongoose.model("ProcessSchema", ProcessSchema);
