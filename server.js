import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

import playerRouter from './routes/playerRoutes.js';

dotenv.config();
const { PORT, NODE_ENV } = process.env;

const app = express();
app.use(express.json());

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.use('/api/v1/players', playerRouter);

app.post('/', (req, res) => {
  res.json({
    message: 'data received',
    data: req.body,
  });
});
