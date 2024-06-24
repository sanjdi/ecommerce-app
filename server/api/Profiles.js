import express from 'express';
import { verifyToken } from './auth.js';

const router = express.Router();

router.get('/profile', verifyToken, (req, res) => {
  // implement code to retrieve user profile
  res.json({ "profile": "ok" });
});

export default router;
