# StockLook - Modern Trading Platform

StockLook is a full-stack trading application built with a micro-frontend and micro-service architecture. It features a beautiful landing page, a secure authentication system, and a feature-rich trading dashboard with real-time style stock tracking and data visualization.

---

## 🚀 Features

- **User Authentication**: Secure Signup and Login using JWT and HTTP-only cookies.
- **Micro-Frontend Architecture**: Separation of concerns between the Landing Page and the Trading Dashboard.
- **Trading Dashboard**:
  - Live watchlist with price tracking.
  - Interactive charts (Doughnut & Bar) for portfolio visualization.
  - Orders management (Buy/Sell functionality).
  - Holdings and Positions tracking.
  - Funds management.
- **Modern UI**: Clean, responsive design using Bootstrap and Material UI.

---

## 🛠️ Tech Stack

### Frontend (Landing Page & Auth)
- **Language**: JavaScript (ES6+)
- **Library**: React.js
- **Routing**: React Router DOM (v7)
- **Notifications**: React Toastify
- **Styling**: Bootstrap 5 & Vanilla CSS
- **API Client**: Axios

### Dashboard
- **Library**: React.js
- **Charts**: Chart.js & React-Chartjs-2
- **UI Components**: Material UI (MUI) & MUI Icons
- **Styling**: Specialized Dashboard CSS

### Backend Servers (Node.js & Express)
We use two dedicated servers for separation of logic:

1. **Auth Server (Port 4000)**:
   - **Database**: MongoDB (via Mongoose)
   - **Security**: Bcrypt.js (Password hashing)
   - **Authentication**: JWT (JSON Web Tokens)
   - **Middleware**: Cookie-parser, CORS, Dotenv

2. **Trading Backend (Port 3002)**:
   - **Database**: MongoDB (via Mongoose)
   - **Logic**: Handles Holdings, Positions, and Order placement.

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- npm (Node Package Manager)

---

## ⚙️ Installation & Setup

Follow these steps to get the entire ecosystem running:

### 1. Clone the repository
```bash
git clone https://github.com/GayathriSalini/StockLook.git
cd StockLook
```

### 2. Setup the Authentication Server
```bash
cd server
npm install
# Create a .env file with:
# MONGO_URL=your_mongodb_uri
# PORT=4000
# TOKEN_KEY=your_secret_key
npm start
```

### 3. Setup the Trading Backend
```bash
cd ../backend
npm install
# Create a .env file with:
# MONGO_URL=your_mongodb_uri
# PORT=3002
npm start
```

### 4. Setup the Frontend (Landing Page)
```bash
cd ../frontend
npm install
npm start
```

### 5. Setup the Dashboard
```bash
cd ../dashboard
npm install
npm start
# When asked to run on another port, type 'y' (it will run on 3001)
```

---

## 📁 Project Structure

- `/frontend`: The main landing page, About, Pricing, and Auth UI.
- `/dashboard`: The specialized trading interface.
- `/server`: Node.js server handling User Auth (Login/Signup).
- `/backend`: Node.js server handling Trading data (Holdings/Orders).

---

## 🛡️ Security Note
- Passwords are encrypted using **Bcrypt** before saving to the database.
- Authentication is handled via **HTTP-only Cookies** to prevent XSS attacks.
- **CORS** is configured to specific origins only.
