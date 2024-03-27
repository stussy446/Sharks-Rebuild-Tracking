import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });
const { PORT } = process.env;

const app = express();
app.use(express.json());

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.json({
    test: 'hello!',
  });
});
