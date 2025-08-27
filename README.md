# 🌦️ Weather App

A full-stack weather application built with React (frontend), Node.js + Express (backend), and MongoDB (database). The app allows users to search for cities, view weather data, and manage their list of favorite cities by adding and removing.

##  Deployment
```
Backend → deployed on Render - https://weather-api-ekk8.onrender.com/

Frontend → deployed on Vercel -https://weather-app-fik2-id1wjej2b-priyans619s-projects.vercel.app/
```


📂 Project Structure

```weather-app/
│
├── backend/   # Node.js + Express + MongoDB API
│   ├── src/
│   │   ├── models/       # City schema
│   │   ├── routes/       # API routes
│   │   ├── controllers/  # API logic
│   │   ├── server.js     # Main entrypoint
│   │   └── config/       # DB connection
│   ├── package.json
│   └── .env
│
├── frontend/  # React + Tailwind CSS app
│   ├── src/
│   │   ├── api/          # Axios API services
│   │   ├── components/   # UI components
│   │   ├── context/      # Context API for global state
│   │   ├── pages/        # React pages
│   │   └── App.js
│   ├── package.json
│   └── .env
│
└── README.md
```
##  Technologies

### **Frontend**
- **React.js (Vite)** – Frontend framework  
- **Tailwind CSS** – Styling and UI components  
- **Axios** – API communication  
- **React Context API** – State management  

### **Backend**
- **Node.js + Express.js** – Server framework
- **MongoDB + Mongoose** – Database and schema management  
- **dotenv** – Environment variables  
- **CORS** – Secure cross-origin requests  
- **Axios** – External API requests  

### **APIs**
- **OpenWeather API** – To fetch live weather data (current + forecast)

---

## Functionalities

1. **Search Weather** – Get real-time weather of any city.  
2. **5-Day Forecast** – Detailed forecast data.
3. **Cached Data** - Weather Data
4. **Save Favorite Cities** – Add, view, and delete cities stored in MongoDB (Database).  
5. **Responsive UI** – Mobile-friendly with Tailwind CSS.  
6. **Deployed Full-Stack** – Frontend (Vercel), Backend (Render).  

---

## Local Setup
**To run locally on your machine :**
### Clone Repository
```
- git clone https://github.com/<your-username>/weather-app.git
- cd weather-app
```

## Backend Setup

```
- cd backend
- npm install
```
### .env file
**Create .env file in backend**
```
- PORT=5000

- MONGO_URI=<your-mongodb-uri>

- WEATHER_API_KEY=<your-weather-api-key>
```
```
- Run backend: npm run dev

- API will run at → http://localhost:5000/api
```

## Frontend Setup
### In src/api
```
- For WeatheAPI- API_BASE= http://localhost:5000/api/weather

- For CitiesAPI- API_BASE= http://localhost:5000/api/cities
```

```
- cd frontend

- npm install
```

```
- Run frontend: npm run dev

- Webapp will run at → http://localhost:3000
```
---

## 📑 API Documentation

```
Base URL- https://weather-api-ekk8.onrender.com/

Backend endpoint: https://weather-api-ekk8.onrender.com/api

Example- https://weather-api-ekk8.onrender.com/api/weather/current?city=delhi
(This endpoint will return JSON data for Delhi)
```

### All Endpoints

| Method        | Endpoint       | Description            | Body Example                         |   |
|---------------|----------------|------------------------|--------------------------------------|---|
| GET           | /cities        | Get all saved cities   | —                                    |   |
| POST          | /cities        | Add a new city         | { "name": "Delhi", "country": "IN" } |   |
| DELETE        | /cities/:id    | Delete a city by ID    | —                                    |   |
| ☁️ Weather API |                |                        |                                      |   |
| Method        | Endpoint       | Description            | Query Example                        |   |
| GET           | /weather?city= | Get weather for a city | /weather?city=Delhi                  |   |








### Limitations
```
- No user authentication (all data is global).

- No real-time updates (must refresh to see updated weather).

- Weather API may have rate limits (free tier).
```


### Future Improvements
```
- Add Firebase authentication (user-specific city lists).

- Add real-time weather updates (WebSockets).

- Add offline support with service workers (PWA).

- Add location-based weather (geolocation API).

- Expand weather details (forecast, humidity, wind, etc).
```

# Thanks 😊😊