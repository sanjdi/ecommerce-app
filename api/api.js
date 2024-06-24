import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import cors from 'cors';
// import passport from 'passport';
import 'dotenv/config';
import productRoutes from './Products.js';
import userRoutes from './Users.js';
import profileRoutes from './Profiles.js';
import authRoutes from './auth.js';

const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/ecommerce';

mongoose
  .connect(mongoUrl)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
// app.use(cors());
// app.use(passport.initialize());

app.get('/', (req, res) => {
  res.send('Hello, world!>');
});

app.use(productRoutes);

app.use(userRoutes);

app.use(profileRoutes);

app.use(authRoutes);

// app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server listening on port > ${port}`);
});
