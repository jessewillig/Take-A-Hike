const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
app.use(express.json());

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
  