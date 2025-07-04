# MindMirror

**MindMirror** is a full-stack mental wellness journaling application that helps users reflect on their daily thoughts and receive supportive, AI-generated responses. Users can write daily journal entries, and the system analyzes them using OpenAI’s GPT API to detect emotional tone and mental health indicators. Based on the analysis, it offers personalized suggestions, coping mechanisms, and mindfulness tips to guide users toward better well-being.

## Features

- **Daily Journal Entries**: Users can write and save personal reflections each day.
- **AI-Powered Feedback**: The chatbot uses natural language understanding to detect emotional tone (happy, anxious, stressed, etc.) and offer empathetic responses or improvement suggestions.
- **Mental Health Insight**: Identifies signs of anxiety, depression, or burnout and provides gentle support through prompts and wellness resources.
- **Historical View**: Allows users to view previous entries and AI feedback in a timeline or calendar format.
- **Secure & Private**: All data is stored securely in MongoDB and environment variables are used to protect sensitive configurations.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS (or styled-components)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: OpenAI GPT-4 API
- **Authentication**: JWT or OAuth2 (optional)

## Folder Structure

```
mindmirror/
├── frontend/                # React frontend
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── hooks/
│
├── backend/                 # Node + Express backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── .env                 # Environment variables (excluded via .gitignore)
│   └── .env.example         # Example env file for contributors
│
├── .gitignore
└── README.md
```


## Getting Started

Follow the steps below to run the project locally.

### 1. Clone the Repository


git clone https://github.com/your-username/MindMirror.git
cd MindMirror
2. Set Up the Backend
cd server
npm install

Create a .env file:
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
PORT=5000
OPENAI_API_KEY=your-openai-api-key

Start the backend server:
npm run dev

3. Set Up the Frontend
cd ../client
npm install
npm start

The app will be available at http://localhost:3000.

Usage
On the homepage, users are prompted to write how they feel.

After submitting the journal, the AI responds with relevant feedback based on tone and emotional content.

Past entries and AI responses can be reviewed to track emotional well-being over time.
