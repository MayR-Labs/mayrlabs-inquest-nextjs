import mongoose, { Schema, Model } from 'mongoose';
import { IFormResponse } from '../types/models';

const FormResponseSchema = new Schema<IFormResponse>(
  {
    form_id: { type: Schema.Types.ObjectId, ref: 'Form', required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    answers: { type: Schema.Types.Mixed, required: true },
    submitted_at: { type: Date, default: Date.now },
  },
  {
    timestamps: false, // We use submitted_at explicitly, but mongoose does validation
  },
);

const FormResponse: Model<IFormResponse> =
  mongoose.models.FormResponse || mongoose.model<IFormResponse>('FormResponse', FormResponseSchema);

export default FormResponse;
