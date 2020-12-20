module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_URL: process.env.DB_URL || "postgresql://carito@localhost/tastebuddy",
  API_BASE_URL:
    process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api",
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || "http://localhost:3000",
  //"https://taste-buddy-client.vercel.app/",
  JWT_SECRET: process.env.JWT_SECRET || "taste-buddy",
};
