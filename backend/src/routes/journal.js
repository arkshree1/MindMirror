import express from 'express';
import jwt from 'jsonwebtoken';
import JournalEntry from '../models/JournalEntry.js';
import { getJournalFeedback } from '../services/openaiService.js';

const router = express.Router();

function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token' });
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
}

// Create journal entry
router.post('/', auth, async (req, res) => {
  const { text, date } = req.body;
  try {
    const entry = await JournalEntry.create({ userId: req.userId, text, date });
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all entries for user
router.get('/', auth, async (req, res) => {
  try {
    const entries = await JournalEntry.find({ userId: req.userId }).sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Feedback route
router.post('/feedback', auth, async (req, res) => {
  const { text, entryId } = req.body;
  try {
    const feedback = await getJournalFeedback(text);
    // Optionally save feedback to entry
    if (entryId) {
      await JournalEntry.findByIdAndUpdate(entryId, { feedback });
    }
    res.json({ feedback });
  } catch (err) {
    console.error('AI feedback error:', err);
    res.status(500).json({ message: 'AI feedback error', error: err.message });
  }
});

export default router; 