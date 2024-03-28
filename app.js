import express from 'express';
import morgan from 'morgan';

import playerRouter from './routes/playerRoutes.js';

// express initialization and Middleware
const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ROUTES
app.use('/api/v1/players', playerRouter);

// Nonexistent route handler
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Route not found',
  });
});

// Error route handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: 'something went wrong',
  });
  next();
});

export default app;
