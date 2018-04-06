"use strict";

const express = require("express");

const app = express();

app.disable("x-powered-by");

const handlebars = require("express-handlebars").create({defaultLayout:'main'});

app.engine("handlebars", handlebars.engine);

app.set("view engine", "handlebars");

app.use(require("body-parser").urlencoded({extended: true}));

// app.set sets environment variable
app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));
app.use(require("./routes/home"));
app.use(require("./routes/about"));
app.use(require("./routes/code"));
app.use(require("./routes/design"));

app.listen(app.get("port"), () => {
    console.log("yas!");
});

module.exports = app;