# Minimal SQLite + Express + React + Tailwind Boilerplate

A minimal full-stack boilerplate with SQLite database, Express.js backend, React frontend, and Tailwind CSS.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm run install:all
   ```

2. **Start development servers:**
   ```bash
   npm run dev
   ```

   - Backend: http://localhost:3000
   - Frontend: http://localhost:5050

## 📁 Project Structure

```
├── backend/
│   ├── app.js          # Express server with SQLite
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   ├── api.js      # API client
│   │   └── App.jsx     # Main app
│   └── package.json
└── package.json        # Root scripts
```

## 🛠️ Features

- **Backend**: Express.js with SQLite database
- **Authentication**: JWT-based auth with bcrypt
- **Frontend**: React with React Router
- **Styling**: Tailwind CSS
- **Database**: SQLite with users table
- **API**: RESTful endpoints for auth and users

## 📡 API Endpoints

- `POST /api/register` - User registration
- `POST /api/login` - User login  
- `GET /api/profile` - Get user profile (protected)
- `GET /api/users` - Get all users (protected)
- `GET /api/health` - Health check

## 🔧 Scripts

- `npm run dev` - Start both backend and frontend
- `npm run backend` - Start backend only
- `npm run frontend` - Start frontend only
- `npm run install:all` - Install all dependencies

## 🎨 Pages

- **Home** - Landing page
- **Login/Register** - Authentication forms
- **Dashboard** - Protected user dashboard with users list

Clean, minimal, and ready to build upon!