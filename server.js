import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

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

app.get('/', (req, res) => {
  res.json({
    test: 'hello!',
  });
});

app.post('/', (req, res) => {
  res.json({
    message: 'data received',
    data: req.body,
  });
});
