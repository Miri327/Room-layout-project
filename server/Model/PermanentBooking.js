// models/PermanentBooking.js

const mongoose = require('mongoose');
const Booking = require('./Booking'); // ייבוא של המודל המשותף

const permanentBookingSchema = new mongoose.Schema({
  dayOfWeek: { type: Number, required: true, min: 1, max: 7 } // 1 = ראשון, 7 = שבת
});

// שימוש ב-Discriminator על המודל הראשי
const PermanentBooking = Booking.discriminator('Permanent', permanentBookingSchema);

module.exports = PermanentBooking;