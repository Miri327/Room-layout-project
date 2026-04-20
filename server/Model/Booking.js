const mongoose = require('mongoose');
const LESSON_TIMES = require('../config/lessonTimes');

const bookingOptions = { discriminatorKey: 'bookingType', collection: 'bookings' };

const baseBookingSchema = new mongoose.Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  requesterName: { type: String, required: true },
  purpose: { type: String }, // מטרת השיבוץ
  
  // שדות זמן 
  startTime: { type: String }, // פורמט "HH:mm"
  endTime: { type: String },
  lessonNumbers: [{ type: Number }], // מערך של מספרי שיעורים
  
  createdAt: { type: Date, default: Date.now }
}, bookingOptions);

// ולידציה צולבת ומילוי אוטומטי של שעות
baseBookingSchema.pre('validate', function(next) {
  const hasTime = this.startTime && this.endTime;
  const hasLessons = this.lessonNumbers && this.lessonNumbers.length > 0;

  if (!hasTime && !hasLessons) {
    this.invalidate('startTime', 'חובה להזין שעות התחלה וסיום או לחלופין לבחור מספרי שיעורים.');
    this.invalidate('lessonNumbers', 'חובה להזין שעות התחלה וסיום או לחלופין לבחור מספרי שיעורים.');
  }
  
  if (hasLessons && !hasTime) {
    const sortedLessons = [...this.lessonNumbers].sort((a, b) => a - b);
    const firstLesson = sortedLessons[0];
    const lastLesson = sortedLessons[sortedLessons.length - 1];
    
    if (LESSON_TIMES[firstLesson] && LESSON_TIMES[lastLesson]) {
      this.startTime = LESSON_TIMES[firstLesson].start;
      this.endTime = LESSON_TIMES[lastLesson].end;
    }
  }

  next();
});

const Booking = mongoose.model('Booking', baseBookingSchema);

module.exports = Booking;