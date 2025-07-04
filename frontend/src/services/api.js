import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL + '/api',
});

export const register = (email, password) =>
  API.post('/auth/register', { email, password });

export const login = (email, password) =>
  API.post('/auth/login', { email, password });

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common['Authorization'];
  }
};

export const createJournal = (text, date) =>
  API.post('/journal', { text, date });

export const getJournals = () =>
  API.get('/journal');

export const getFeedback = (text, entryId) =>
  API.post('/journal/feedback', { text, entryId });

export default API; 