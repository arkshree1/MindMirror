import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getJournals, setAuthToken } from '../services/api';

export default function Dashboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/login');
    setAuthToken(token);
    getJournals()
      .then(res => setEntries(res.data))
      .catch(() => navigate('/login'))
      .finally(() => setLoading(false));
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => navigate('/journal')}>Add New Entry</button>
      {loading ? <div>Loading...</div> : (
        <ul>
          {entries.map(entry => (
            <li key={entry._id}>
              <strong>{new Date(entry.date).toLocaleDateString()}</strong>: {entry.text}
              {entry.feedback && <div><em>Feedback:</em> {entry.feedback}</div>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 