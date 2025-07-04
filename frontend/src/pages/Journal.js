import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createJournal, getFeedback, setAuthToken } from '../services/api';

export default function Journal() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setFeedback('');
    try {
      const token = localStorage.getItem('token');
      setAuthToken(token);
      const date = new Date().toISOString();
      const res = await createJournal(text, date);
      const fb = await getFeedback(text, res.data._id);
      setFeedback(fb.data.feedback);
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (err) {
      setError('Failed to submit entry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>New Journal Entry</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={e => setText(e.target.value)} required rows={6} cols={50} placeholder="Write your thoughts..." />
        <br />
        <button type="submit" disabled={loading}>Submit</button>
      </form>
      {loading && <div>Processing...</div>}
      {feedback && <div><strong>AI Feedback:</strong> {feedback}</div>}
      {error && <div style={{color:'red'}}>{error}</div>}
    </div>
  );
} 