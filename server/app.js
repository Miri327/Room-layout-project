import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // 1. ייבוא cors
// ייבוא המודל שחברה שלך יצרה
import User from './Model/user.js'; 

dotenv.config();

const app = express();
app.use(cors()); // 2. הפעלת cors לכל הבקשות
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

// חיבור למסד הנתונים
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas successfully!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// הפונקציה שלך: שליפת כל המשתמשים (GET)
app.get('/users', async (req, res) => {
    try {
        // שימוש במודל User לשליפת כל הרשומות
        const users = await User.find(); 
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ 
            message: "שגיאה בשליפת המשתמשים", 
            error: error.message 
        });
    }
});

// בדיקת "דופק" לשרת
app.get('/hello', (req, res) => {
    res.send('Server is running and connected to the Model! 😍');
});

app.listen(PORT, () => {
    console.log(`My app is running on http://localhost:${PORT}`);
});