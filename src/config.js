module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://qbkiqyylwhlvlq:5788b8946520d6158e64ab4aa66b74f3eba1ef9de27a1095030c1a3a83e36a55@ec2-34-237-166-54.compute-1.amazonaws.com:5432/d50c92tbmd1v5a",
  API_BASE_URL: process.env.API_BASE_URL,
  CLIENT_ORIGIN:
    process.env.CLIENT_ORIGIN || "https://taste-buddy-client.vercel.app",
  JWT_SECRET: process.env.JWT_SECRET,
};
