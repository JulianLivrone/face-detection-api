const DATABASE_HOST = process.env.POSTGRES_HOST || "127.0.0.1";
const DATABASE_PORT = process.env.POSTGRES_PORT || 5432;
const DATABASE_USER = process.env.POSTGRES_USER || "postgres";
const DATABASE_PW = process.env.POSTGRES_PASSWORD || "postgres";
const DATABASE_DB = process.env.POSTGRES_DB || "face-detection";
const PORT = process.env.PORT || 3000;

module.exports = {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PW,
  DATABASE_DB,
  PORT,
};
