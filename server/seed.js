import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Activity from './models/Activity.js';

dotenv.config();

async function run(){
  await mongoose.connect(process.env.MONGO_URI);
  await Activity.deleteMany({});
  await Activity.insertMany([
    {
      title: 'Genome Editing Workshop',
      description: 'Hands-on CRISPR basics with pipetting practice.',
      startDate: new Date(new Date().getFullYear(), 8, 25),  // Sept 25
      imageUrl: '/Images/event1.jpg'
    },
    {
      title: 'Biotech Symposium',
      description: 'Talks from researchers and alumni.',
      startDate: new Date(new Date().getFullYear(), 9, 12),
      endDate: new Date(new Date().getFullYear(), 9, 12),
      imageUrl: '/Images/event2.jpg'
    },
    {
      title: 'Lab Tour',
      description: 'See our facilities and safety workflow.',
      startDate: new Date(new Date().getFullYear(), 6, 12),
      endDate: new Date(new Date().getFullYear(), 6, 12),
      imageUrl: '/Images/event3.jpg'
    }
  ]);
  console.log('Seeded activities');
  await mongoose.disconnect();
}
run().catch(console.error);
