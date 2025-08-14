import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  name: { type:String, required:true },
  email: { type:String, required:true },
  role: String,
  interests: String,
  message: String
},{ timestamps:true });

export default mongoose.model('Application', ApplicationSchema);
