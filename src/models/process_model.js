import mongoose from "mongoose";

const ProcessSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'El título es requerido'],
    trim: true,
    maxlength: [100, 'El título no puede exceder 100 caracteres']
  },
  description: {
    type: String,
    required: [true, 'La descripción es requerida'],
    trim: true
  },
  processCode: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'cancelled'],
    default: 'active'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Process', ProcessSchema);
