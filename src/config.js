module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_URL: process.env.DB_URL || "postgresql://carito@localhost/tastebuddy",
  CLIENT_ORIGIN: "https://taste-buddy-client.vercel.app/",
};
