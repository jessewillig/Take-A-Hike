//Import dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();


require("dotenv").config();
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const router = require("./routes");
const cors = require('cors');

//Session
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI || "mongodb://localhost/Hike",
  collection: "sessions"
});
store.on("error", (error) => {
  console.log(error);
});

app.use(session({
  secret: "Super secret secret",
  cookie: {
    //Cookie lasts one day
    maxAge: 1000 * 60 * 60 * 24
  },
  store: store,
  saveUninitialized: true,
  resave: true
}))

app.use(cors());

//Parse app body as json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(router);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Hike',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
