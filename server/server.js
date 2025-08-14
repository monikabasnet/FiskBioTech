import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import Activity from './models/Activity.js';
import Application from './models/Application.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend static files
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

// Mongo connect
mongoose.connect(process.env.MONGO_URI)
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err.message));

// Helper to group activities by status
function splitByStatus(list){
  const now = new Date();
  const groups = { ongoing:[], upcoming:[], past:[] };
  list.forEach(a=>{
    const start = new Date(a.startDate);
    const end = a.endDate ? new Date(a.endDate) : null;
    const isOngoing = end ? start <= now && now <= end : start.toDateString() === now.toDateString();
    const isUpcoming = start > now;
    if (isOngoing) groups.ongoing.push(a);
    else if (isUpcoming) groups.upcoming.push(a);
    else groups.past.push(a);
  });
  // sort: upcoming soonest first, past most recent first
  groups.upcoming.sort((a,b)=> new Date(a.startDate) - new Date(b.startDate));
  groups.past.sort((a,b)=> new Date(b.startDate) - new Date(a.startDate));
  return groups;
}

/* --- API ROUTES --- */

// GET /api/activities
app.get('/api/activities', async (req,res)=>{
  try{
    const items = await Activity.find().lean();
    res.json(splitByStatus(items));
  }catch(e){
    console.error(e); res.status(500).json({error:'Server error'});
  }
});

// POST /api/join
app.post('/api/join', async (req,res)=>{
  try{
    const { name, email, role, interests, message } = req.body;
    if(!name || !email) return res.status(400).json({error:'name & email required'});
    await Application.create({ name, email, role, interests, message });
    res.status(201).json({ ok:true });
  }catch(e){
    console.error(e); res.status(500).json({error:'Server error'});
  }
});

// Fallback to index for any unknown static path (so direct links work)
app.get('*', (req,res)=> res.sendFile(path.join(publicPath, 'index.html')));

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`Server running at http://localhost:${PORT}`));
