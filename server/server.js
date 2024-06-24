import express from 'express';
import mongoose from 'mongoose';
//import api from './api/api.js';

const app = express();

const port = process.env.PORT || 3002;

mongoose
  .connect('mongodb://127.0.0.1:27017/ecommerce')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//app.use('/api', api);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
