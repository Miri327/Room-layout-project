import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // מזהה פשוט (מספר)
  userId: {
    type: Number,
    required: [true, 'חובה להזין ID'],
    unique: true
  },
  // שם המשתמש
  name: {
    type: String,
    required: [true, 'חובה להזין שם'],
    trim: true
  }
});

// ייצוא המודל
const User = mongoose.model('User', userSchema);
export default User;