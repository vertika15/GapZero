# Gap Zero — Project Context

## Summary
- Gap Zero is an AI-powered learning platform that identifies missing fundamentals and builds a reverse learning path from the learner’s goals.
- Frontend runs with Vite preview; backend is an Express API with JWT auth and MongoDB via Mongoose, supporting Atlas with a safe local fallback.
- Login/Signup flows are wired; Signup redirects to onboarding; Login redirects to role-specific dashboards.
- When DB is unavailable, key endpoints provide fallback data to keep the app usable.

## Tech Stack
- Frontend: React, React Router, Tailwind CSS, Framer Motion
- Backend: Node.js, Express, Mongoose, JWT, CORS, dotenv
- Database: MongoDB Atlas preferred; local MongoDB fallback

## Frontend
- Routing defined in [App.jsx](file:///c:/Users/VERTIKA/GapZero/react-app/src/App.jsx#L25-L41) for all pages (Landing, Login, Signup, Student/Teacher/Admin dashboards, Course, Assessment, Gap Analysis, Learning Path, Profile, Onboarding, Lessons, Tutor, Daily, Progress).
- API client: [api.js](file:///c:/Users/VERTIKA/GapZero/react-app/src/lib/api.js#L3-L15) with baseURL http://localhost:5000/api and token persistence via localStorage.
- Signup flow: stores JWT and redirects to onboarding
  - See [Signup.jsx](file:///c:/Users/VERTIKA/GapZero/react-app/src/pages/Signup.jsx#L21-L24).
- Login flow: stores JWT and redirects based on role
  - See [Login.jsx](file:///c:/Users/VERTIKA/GapZero/react-app/src/pages/Login.jsx#L19-L22).
- Onboarding: fetches categories and posts selected goals, then navigates to assessment
  - See [Onboarding.jsx](file:///c:/Users/VERTIKA/GapZero/react-app/src/pages/Onboarding.jsx#L14-L24) and submit logic [Onboarding.jsx](file:///c:/Users/VERTIKA/GapZero/react-app/src/pages/Onboarding.jsx#L34-L45).

## Backend
- Server setup and routes in [server.js](file:///c:/Users/VERTIKA/GapZero/backend/server.js#L25-L33).
- Health endpoint returns server and DB status: [server.js](file:///c:/Users/VERTIKA/GapZero/backend/server.js#L34-L36).
- Database connection prefers Atlas and safely falls back to local if credentials are incomplete:
  - See [db.js](file:///c:/Users/VERTIKA/GapZero/backend/config/db.js#L7-L22).
- Auth:
  - Register and login return user info and a JWT token: [authController.js](file:///c:/Users/VERTIKA/GapZero/backend/controllers/authController.js#L13-L55) and [authController.js](file:///c:/Users/VERTIKA/GapZero/backend/controllers/authController.js#L57-L81).
- Goals:
  - Category listing supports DB-less fallback data if Atlas/local DB is unavailable:
    - See [goalController.js](file:///c:/Users/VERTIKA/GapZero/backend/controllers/goalController.js#L1-L27).
  - Goal setup persists or returns provided data in fallback mode: [goalController.js](file:///c:/Users/VERTIKA/GapZero/backend/controllers/goalController.js#L9-L27).

## Environment
- Config in [backend/.env](file:///c:/Users/VERTIKA/GapZero/backend/.env#L1-L6):
  - NODE_ENV=development
  - PORT=5000
  - MONGO_URI=mongodb://localhost:27017/gapzero
  - JWT_SECRET=gapzero_secret_key_123
  - SEED=true
  - ATLAS_URI=mongodb+srv://anas:<db_password>@cluster0.839xdmg.mongodb.net/?appName=Cluster0
- Notes:
  - Replace `<db_password>` with the actual Atlas password to enable Atlas connectivity.
  - If Atlas credentials are invalid or missing, the app falls back to local MongoDB.

## How to Run
- Backend:
  - From `backend`: `node server.js`
  - Health: GET http://localhost:5000/ → `{"status":"ok","db":"connected"}` when DB is connected.
- Frontend:
  - From `react-app`: `npm run preview`
  - Local preview: http://localhost:4173/

## Current Status
- Frontend preview server runs at http://localhost:4173/.
- Backend server runs on port 5000; health endpoint works.
- Signup redirects to onboarding; Login redirects based on role.
- Goals endpoints return fallback categories when DB is unavailable.
- DB status shows unavailable until Atlas password is set or local MongoDB is running.

## Next Steps
- Set the actual Atlas password in `ATLAS_URI` and restart backend.
- Seed questions and implement assessment flow end-to-end.
- Implement AI Tutor Chat backend endpoints.
- Expand demo/fallback data coverage as needed.

## Useful Paths
- Frontend routing: [App.jsx](file:///c:/Users/VERTIKA/GapZero/react-app/src/App.jsx#L25-L41)
- Signup: [Signup.jsx](file:///c:/Users/VERTIKA/GapZero/react-app/src/pages/Signup.jsx#L21-L24)
- Login: [Login.jsx](file:///c:/Users/VERTIKA/GapZero/react-app/src/pages/Login.jsx#L19-L22)
- Onboarding: [Onboarding.jsx](file:///c:/Users/VERTIKA/GapZero/react-app/src/pages/Onboarding.jsx)
- API client: [api.js](file:///c:/Users/VERTIKA/GapZero/react-app/src/lib/api.js)
- Server: [server.js](file:///c:/Users/VERTIKA/GapZero/backend/server.js)
- DB connect: [db.js](file:///c:/Users/VERTIKA/GapZero/backend/config/db.js)
- Auth controller: [authController.js](file:///c:/Users/VERTIKA/GapZero/backend/controllers/authController.js)
- Goals controller: [goalController.js](file:///c:/Users/VERTIKA/GapZero/backend/controllers/goalController.js)
- Env: [backend/.env](file:///c:/Users/VERTIKA/GapZero/backend/.env)
