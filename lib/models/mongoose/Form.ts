import mongoose, { Schema, Model } from 'mongoose';
import { IForm } from '@/lib/types/models';

const FormSchema = new Schema<IForm>(
  {
    title: { type: String, required: true },
    description: { type: String },
    schema: { type: Schema.Types.Mixed, required: true }, // Store as flexible JSON
    status: {
      type: String,
      enum: ['draft', 'active', 'locked', 'disabled'],
      default: 'draft',
    },
    submit_message: { type: String },
    recipients: [{ type: String }], // Array of email strings
    created_by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

const Form: Model<IForm> = mongoose.models.Form || mongoose.model<IForm>('Form', FormSchema);

export default Form;
