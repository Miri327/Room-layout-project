
import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

// חיבור למסד הנתונים MongoDB Atlas
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas successfully!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));


app.get('/hello', (req, res) => {
    res.send('HELLO!!!😍👍👌😘🙌')
})

app.listen(PORT, () => {
    console.log(`my app is running on http://localhost:${PORT}`);
})