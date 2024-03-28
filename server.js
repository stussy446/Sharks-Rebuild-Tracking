import dotenv from 'dotenv';
import mongoose from 'mongoose';

import app from './app.js';

dotenv.config();
const { PORT, NODE_ENV } = process.env;
let { DATABASE } = process.env;

DATABASE = DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// Connect to mongodb or exit application if it cannot be connected to
try {
  mongoose.connect(DATABASE).then(() => {
    console.log('DB Connection successful');
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

// run application and listen on provided port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
