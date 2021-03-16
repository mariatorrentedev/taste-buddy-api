module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL: process.env.DATABASE_URL,
  API_BASE_URL: process.env.API_BASE_URL,
  CLIENT_ORIGIN:
    process.env.CLIENT_ORIGIN || "https://taste-buddy-client.vercel.app",
  JWT_SECRET: process.env.JWT_SECRET,
};
