# MindMirror Backend

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in your values:
   - `MONGODB_URI` (e.g., from MongoDB Atlas)
   - `JWT_SECRET` (any strong secret)
   - `OPENAI_API_KEY` (from https://platform.openai.com)
   - `PORT` (default: 5000)

3. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login, returns JWT
- `POST /api/journal` — Create journal entry (auth required)
- `GET /api/journal` — List user journal entries (auth required)
- `POST /api/journal/feedback` — Get AI feedback for a journal entry (auth required)

Send JWT as `Authorization: Bearer <token>` header for protected routes. 