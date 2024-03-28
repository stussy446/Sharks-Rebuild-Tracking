import dotenv from 'dotenv';
import mongoose from 'mongoose';

import app from './app.js';

dotenv.config();
const { PORT, NODE_ENV } = process.env;
let { DATABASE } = process.env;

DATABASE = DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DATABASE).then(() => {
  console.log('DB Connection successful');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
