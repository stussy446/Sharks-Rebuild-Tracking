import dotenv from 'dotenv';
import mongoose from 'mongoose';
import fs from 'fs';
import Player from '../../models/Player.js';
import User from '../../models/User.js';

dotenv.config();
const __dirname = import.meta.dirname;

let { DATABASE } = process.env;
DATABASE = DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DATABASE).then(() => {
  console.log('DB Connection successful');
});

// READ JSON FILES
const players = JSON.parse(
  fs.readFileSync(`${__dirname}/players.json`, 'utf-8')
);

const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Player.create(players);
    await User.create(users);
    console.log(`data successfully loaded`);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Player.deleteMany();
    await User.deleteMany();
    console.log(`deletion successful!`);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
