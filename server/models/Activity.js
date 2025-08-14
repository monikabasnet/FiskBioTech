import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
  title: { type:String, required:true },
  description: String,
  startDate: { type: Date, required:true },
  endDate: Date,
  imageUrl: String
},{ timestamps:true });

export default mongoose.model('Activity', ActivitySchema);
