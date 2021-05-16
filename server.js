const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const router = require("./routes");

const app = express();
const store = new MongoDBStore({ 
  uri: process.env.MONGODB_URI || "mongodb://localhost/hikes",
  collection: "sessions"
});

store.on("error", (error)=> {
  console.log(error);
});

app.use(session({
  secret: "Super secret secret",
  cookie: { 
    //Cookie lasts one day
    maxAge: 1000 * 60 * 60 *24
  }, 
  stone: store,
  saveUninitialized: true,
  resave: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
  