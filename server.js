//Import dependencies
require('dotenv').config();
const express = require("express");
const path = require("path");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const router = require("./routes");

//Set up app and store session
const PORT = process.env.PORT || 3001;
const app = express();
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

//Parse app body as json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.listen(PORT, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
