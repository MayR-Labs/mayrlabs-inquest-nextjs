import mongoose, { Schema, Model } from 'mongoose';
import { IUser } from '@/lib/types/models';

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, index: true },
    provider_details: { type: Map, of: Schema.Types.Mixed, default: {} },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    last_activity: { type: Date, default: Date.now },
    onboarded_at: { type: Date },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

// Prevent model recompilation in Next.js hot reloading
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
