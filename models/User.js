import mongoose from 'mongoose';
import slugify from 'slugify';

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'User must have a first name'],
    trim: true,
    maxLength: [40, 'Player must have name less than 40 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'User must have a last name'],
    trim: true,
    maxLength: [40, 'Player must have name less than 40 characters'],
  },
  email: {
    type: String,
    required: [true, 'USer must have an email'],
  },
  password: {
    type: String,
  },
  location: {
    type: String,
    default: 'My City',
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

userSchema.pre('save', function (next) {
  this.slug = slugify(this.lastName, { lower: true });
  next();
});

const User = mongoose.model('User', userSchema);

export default User;
