const express = require('express');
const cors = require("cors");
require("dotenv").config();
const { dbRouter } = require("./routes/db-routes");
let mongoose;
try {
  mongoose = require("mongoose");
} catch (e) {
  console.log(e);
}

const app = express();

// Serve the static files from the React app
app.use(
    cors()
);
app.use(express.json());

// An api endpoint

app.use("/", dbRouter);

app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});



// Handles any requests that don't match the ones above


//Data base
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);