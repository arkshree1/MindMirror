import React, { useState } from 'react';
import { getFeedback, setAuthToken } from '../services/api';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(msgs => [...msgs, { from: 'user', text: input }]);
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      setAuthToken(token);
      const res = await getFeedback(input);
      setMessages(msgs => [...msgs, { from: 'bot', text: res.data.feedback }]);
    } catch {
      setMessages(msgs => [...msgs, { from: 'bot', text: 'Sorry, something went wrong.' }]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <div>
      <h2>MindMirror Chatbot</h2>
      <div style={{border:'1px solid #ccc', padding:10, minHeight:200, marginBottom:10}}>
        {messages.map((msg, i) => (
          <div key={i} style={{textAlign: msg.from==='user'?'right':'left'}}>
            <b>{msg.from==='user'?'You':'Bot'}:</b> {msg.text}
          </div>
        ))}
        {loading && <div>Bot is thinking...</div>}
      </div>
      <form onSubmit={handleSend}>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type your message..." style={{width:'80%'}} />
        <button type="submit" disabled={loading}>Send</button>
      </form>
    </div>
  );
} 