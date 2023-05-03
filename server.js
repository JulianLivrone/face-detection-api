const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");
const auth = require("./controllers/authorization");

const morgan = require("morgan");

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PW,
  DATABASE_DB,
  PORT,
} = require("./config");

const db = knex({
  client: "pg",
  // connection: {
  //   host: DATABASE_HOST,
  //   port: DATABASE_PORT,
  //   user: DATABASE_USER,
  //   password: DATABASE_PW,
  //   database: DATABASE_DB,
  // },
  connection: process.env.POSTGRES_URI,
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("success");
});

app.post("/signin", (req, res) =>
  signin.signinAuthentication(req, res, db, bcrypt)
);

app.post("/register", (req, res) =>
  register.handleRegister(req, res, db, bcrypt)
);

app.get("/profile/:id", auth.requireAuth, (req, res) =>
  profile.handleProfileGet(req, res, db)
);
app.post("/profile/:id", auth.requireAuth, (req, res) =>
  profile.handleProfileUpdate(req, res, db)
);

app.put("/image", auth.requireAuth, (req, res) =>
  image.handleImage(req, res, db)
);
app.post("/imageUrl", auth.requireAuth, (req, res) =>
  image.handleApiCall(req, res, db)
);

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
