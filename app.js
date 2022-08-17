const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const repController = require('./Controller/repController')

// routes
const repRoutes = require("./routes/repRoutes");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.json());

//public path
app.use(express.static('public'))

app.use("/", repRoutes);
app.get("/", repController.getRep)

module.exports = app