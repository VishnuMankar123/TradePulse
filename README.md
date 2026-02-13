# 🚀 TradePulse

Smart Decision Engine for MSMEs  
AI + Rule Based Business Analytics Platform

---

## 📁 Project Structure

```
TradePulse
 ├── TradePulse_backend
 │     └── TradePulse
 ├── TradePulse_frontend
 │     └── tradepulse-ui
 └── README.md
```

---

# 🛠️ Tech Stack

## Backend
- ASP.NET Core
- Entity Framework Core
- SQL Server
- Swagger

## Frontend
- React (Vite)
- TypeScript
- Axios

---

# 📋 Prerequisites

Make sure you have installed:

- .NET 10 SDK
- Node.js (v18+ recommended)
- SQL Server
- Git

Check versions:

```
dotnet --version
node -v
npm -v
```

---

# ⚙️ Backend Setup

## 1️⃣ Go to Backend Folder

```
cd TradePulse_backend/TradePulse
```

## 2️⃣ Restore Dependencies

```
dotnet restore
```

## 3️⃣ Update Database Connection

Edit:

```
appsettings.json
```

Update connection string:

```
 "DefaultConnection": "Server=(localdb)\\MSSQLLocalDB;Database=TradePulse_MainDB;Trusted_Connection=True;TrustServerCertificate=True"
```

## 4️⃣ Run Backend

```
dotnet run
```

Backend will start at:

```
https://localhost:xxxx
```

Swagger URL:

```
https://localhost:7061/swagger/index.html
```

---

# 💻 Frontend Setup

## 1️⃣ Go to Frontend Folder

```
cd TradePulse_frontend/tradepulse-ui
```

## 2️⃣ Install Dependencies

```
npm install
```

## 3️⃣ Run Frontend

```
npm run dev
```

Frontend will start at:

```
http://localhost:5173
```

---

# 🌐 API Base URL Setup

Inside frontend create `.env` file:

```
VITE_API_URL=https://localhost:7061/api
```

Update port as per backend.

---

# 🚀 Running Full Project

## Terminal 1 → Backend

```
cd TradePulse_backend/TradePulse.API
dotnet run
```

## Terminal 2 → Frontend

```
cd TradePulse_frontend/tradepulse-ui
npm run dev
```

---

# 📌 Future Improvements

- JWT Authentication
- Decision Engine Microservice
- Docker Support
- CI/CD Pipeline
- Deployment to Azure/AWS

---

# 👨‍💻 Author

Vishnu Mankar
