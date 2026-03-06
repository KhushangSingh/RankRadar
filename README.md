# Gradevo

Anonymous CGPA leaderboard for college students. See where you rank in your branch, specialisation, and batch — without revealing your identity to peers unless you add them as friends.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite + Tailwind CSS |
| Backend | Node.js + Express 5 |
| Database | MongoDB Atlas (Mongoose) |
| Auth | JWT (7-day sessions, bcryptjs) |
| Hosting | Render (API) + Vercel (client) |

---

## Local Development

### Prerequisites
- Node.js ≥ 18
- A MongoDB Atlas cluster (free tier works)

### 1. Clone & install
```bash
git clone https://github.com/KhushangSingh/Gradevo.git
cd Gradevo
cd client && npm install
cd ../server && npm install
```

### 2. Configure environment variables

#### Server (`server/.env`)
Copy `server/.env.example` → `server/.env` and fill in:
```
PORT=5000
NODE_ENV=development
MONGO_URI=<your MongoDB Atlas connection string>
JWT_SECRET=<long random string>
CLIENT_URL=http://localhost:5173
```

#### Client (`client/.env`)  *(optional in dev — Vite proxy handles it)*
```
VITE_API_URL=
```

### 3. Run
Open two terminals:
```bash
# Terminal 1 — backend
cd server && npm run dev

# Terminal 2 — frontend
cd client && npm run dev
```
Visit http://localhost:5173

---

## Production Deployment

### Backend (Render)
1. Create a new **Web Service**, Root Directory: `server`
2. Set these environment variables on Render:

| Variable | Value |
|----------|-------|
| `NODE_ENV` | `production` |
| `MONGO_URI` | Your Atlas URI |
| `JWT_SECRET` | A strong secret |
| `CLIENT_URL` | Your deployed frontend URL |

### Frontend (Vercel)
1. Root Directory: `client`, Build Command: `npm run build`, Output: `dist`
2. Set environment variable:

| Variable | Value |
|----------|-------|
| `VITE_API_URL` | Your Render backend URL |

---

## API Reference

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/api/users` | Public | Register |
| POST | `/api/users/login` | Public | Login |
| GET | `/api/users/me` | Bearer | Get own profile |
| PUT | `/api/users/profile` | Bearer | Update profile |
| DELETE | `/api/users/profile` | Bearer | Delete account |
| GET | `/api/users/leaderboard` | Bearer | Filtered leaderboard |
| POST | `/api/users/add-friend` | Bearer | Add friend by code |
| GET | `/api/users/friends` | Bearer | List friends |
| GET | `/api/health` | Public | Health check |

---

## Security

- HTTP security headers via **Helmet**
- Auth routes rate-limited to **20 requests / 15 min**; general API to **300 / 15 min**
- NoSQL injection prevention via **express-mongo-sanitize**
- CORS restricted to `CLIENT_URL` in production
- Passwords hashed with **bcryptjs** (salt rounds = 10)
- JWT signed with `HS256`, expires in **7 days**
- Error stack traces hidden in production
