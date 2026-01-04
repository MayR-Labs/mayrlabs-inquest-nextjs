import mongoose, { Schema, Model } from 'mongoose';
import { IFormResponse } from '@/lib/types/models';

const FormResponseSchema = new Schema<IFormResponse>(
  {
    form_id: { type: Schema.Types.ObjectId, ref: 'Form', required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    answers: { type: Schema.Types.Mixed, required: true },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

const FormResponse: Model<IFormResponse> =
  mongoose.models.FormResponse || mongoose.model<IFormResponse>('FormResponse', FormResponseSchema);

export default FormResponse;
