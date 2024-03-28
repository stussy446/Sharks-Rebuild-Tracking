import mongoose from 'mongoose';
import slugify from 'slugify';

const playerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Player must have a first name'],
    trim: true,
    maxLength: [40, 'Player must have name less than 40 characters'],
  },

  lastName: {
    type: String,
    required: [true, 'Player must have a last name'],
    trim: true,
    maxLength: [40, 'Player must have name less than 40 characters'],
  },

  slug: {
    type: String,
  },

  team: {
    type: String,
    required: [true, 'A player must have a team'],
    trim: true,
  },

  position: {
    type: String,
    required: [true, 'A player must have a position'],
  },
});

playerSchema.pre('save', function (next) {
  this.slug = slugify(this.lastName, { lower: true });
  next();
});

const Player = mongoose.model('Player', playerSchema);

export default Player;
