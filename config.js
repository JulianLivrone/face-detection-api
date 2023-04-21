const DATABASE_HOST = process.env.DATABASE_HOST || "127.0.0.1";
const DATABASE_PORT = process.env.DATABASE_PORT || 5432;
const DATABASE_USER = process.env.DATABASE_USER || "postgres";
const DATABASE_PW = process.env.DATABASE_PW || "postgres";
const DATABASE_DB = process.env.DATABASE_DB || "face-detection";

module.exports = {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PW,
  DATABASE_DB,
};
