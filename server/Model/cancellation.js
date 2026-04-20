const mongoose = require('mongoose');

const oneTimeCancellationSchema = new mongoose.Schema({
  // ה-ID של הביטול נוצר אוטומטית על ידי MongoDB תחת השדה _id
  
  roomId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Room', 
    required: [true, 'חובה לציין מזהה חדר'] 
  },
  
  cohort: { 
    type: String, // שימוש ב-String עבור תו בודד (CHAR)
    required: [true, 'חובה לציין מחזור (למשל: א, ב, ג)'] 
  },

  date: {
    type: Date,
    required: [true, 'חובה לציין תאריך לביטול']
  },

  // נתוני התחלה
  startHour: { type: String }, 
  startLesson: { type: Number },

  // נתוני סיום
  endHour: { type: String },
  endLesson: { type: Number }

}, { timestamps: true });

// לוגיקת וולידציה - מוודא שהמשתמש הכניס או שעה או שיעור (גם בהתחלה וגם בסוף)
oneTimeCancellationSchema.pre('validate', function(next) {
  // בדיקה עבור תחילת הביטול
  if (!this.startHour && !this.startLesson) {
    this.invalidate('startHour', 'חובה להזין שעת התחלה או מספר שיעור התחלה');
  }
  
  // בדיקה עבור סיום הביטול
  if (!this.endHour && !this.endLesson) {
    this.invalidate('endHour', 'חובה להזין שעת סיום או מספר שיעור סיום');
  }
  
  next();
});

const OneTimeCancellation = mongoose.model('OneTimeCancellation', oneTimeCancellationSchema);
module.exports = OneTimeCancellation;