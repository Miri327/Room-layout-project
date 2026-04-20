// models/TemporaryBooking.js

const mongoose = require('mongoose');
const Booking = require('./Booking'); // ייבוא של המודל המשותף

const temporaryBookingSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  
  // שדות לניהול חריגות ונעילות לפי דרישות הפרויקט
  isCancellation: { type: Boolean, default: false }, // ציון שהחדר שוחרר מהמערכת הקבועה
  isLockedForPermanent: { type: Boolean, default: false } // נעילה לשיבוץ קבוע עתידי
});

// שימוש ב-Discriminator על המודל הראשי
const TemporaryBooking = Booking.discriminator('Temporary', temporaryBookingSchema);

module.exports = TemporaryBooking;