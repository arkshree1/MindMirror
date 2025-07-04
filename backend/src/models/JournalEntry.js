import mongoose from 'mongoose';

const journalEntrySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  text: { type: String, required: true },
  feedback: { type: String },
}, { timestamps: true });

export default mongoose.model('JournalEntry', journalEntrySchema); 