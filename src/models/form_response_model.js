import mongoose from "mongoose";

const FormResponseSchema = new mongoose.Schema({
  processCode: {
    type: String,
    required: true,
    index: true
  },
  role: {
    type: String,
    enum: ['producer', 'distributor', 'store', 'client', 'pending'],
    required: true
  },
  formId: { type: String, required: true },
  responseId: { type: String, unique: true, sparse: true }, // sparse: true permite múltiples documentos con responseId nulo
  submittedAt: { type: Date },
  data: { type: mongoose.Schema.Types.Mixed },
  rawData: { type: mongoose.Schema.Types.Mixed },
  status: {
    type: String,
    enum: ['processed', 'error', 'pending'],
    default: 'pending'
  },
  error: String
}, {
  timestamps: true
});

// Índice compuesto para búsquedas eficientes
FormResponseSchema.index({ processCode: 1, role: 1 });
FormResponseSchema.index({ submittedAt: -1 });

export default mongoose.model('FormResponse', FormResponseSchema);
