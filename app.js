import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

import playerRouter from './routes/playerRoutes.js';

import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { validateTest } from './middleware/validationMiddleware.js';

// express initialization and Middleware
const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.post('/api/v1/test', validateTest, (req, res) => {
  const { name } = req.body;
  res.json({ message: `hello ${name}` });
});

// ROUTES
app.use('/api/v1/players', playerRouter);

// Nonexistent route handler
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Route not found',
  });
});

// Error route handler
app.use(errorHandlerMiddleware);

export default app;
