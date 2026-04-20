const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  // פרטי זיהוי בסיסיים
  roomName: { type: String, required: true, trim: true }, // שם החדר (למשל: "חדר 204")
  
  // הגדרה גנרית של אגף
  wing: { 
    type: String, 
    required: true,
    index: true // אינדקס לחיפוש מהיר לפי אגף
  }, 

  floor: { type: Number, required: true },

  // סוג החדר - שימוש ב-Enum כדי להגביל לאפשרויות מוכרות
  roomType: { 
    type: String, 
    enum: ['כיתה', 'הקבצה', 'מעבדת מחשבים', 'אולם', 'אחר'], 
    default: 'כיתה',
    required: true 
  },

  // קיבולת החדר
  capacity: { 
    type: Number, 
    required: true,
    min: [1, 'חדר חייב להכיל לפחות מקום אחד']
  },

  // אבזור טכני
  amenities: {
    hasProjector: { type: Boolean, default: false },
    hasComputers: { type: Boolean, default: false },
    
  },

  // מערך שיבוצים קבועים (לפי מערכת שעות שבועית)
  recurringSchedule: [{
    dayOfWeek: { type: Number, required: true, min: 1, max: 6 }, // 1=ראשון, 6=שישי
    startTime: { type: String, required: true }, // "08:15"
    endTime: { type: String, required: true },   // "09:00"
    groupName: String, // שם הקבוצה/הכיתה המשובצת
    subject: String    // המקצוע הנלמד
  }],

  // מערך שיבוצים חד-פעמיים (אירועים מיוחדים, מבחנים)
  temporaryBookings: [{
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    description: String,
    bookedBy: String
  }],

  // מערך ביטולים - חשוב מאוד לניהול חדרים שמתפנים
  cancellations: [{
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    reason: String // למשל: "טיול שנתי לשכבת ט'"
  }]
}, { timestamps: true }); // מוסיף אוטומטית שדות של זמן יצירה ועדכון

module.exports = mongoose.model('Room', roomSchema);