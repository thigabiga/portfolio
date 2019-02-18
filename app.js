"use strict";

const express = require("express"),
      bodyParser = require("body-parser"),
      handlebars = require("express-handlebars").create({defaultLayout:'main'}),
      app = express(),
      Promise = require("bluebird");

app.disable("x-powered-by");

app.engine("handlebars", handlebars.engine);

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: true}));

// app.set sets environment variable
app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    next();
});

app.use(require(__dirname + "/routes/home"));
app.use(require(__dirname + "/routes/project"));
app.use(require(__dirname + "/routes/blackjack"));
app.use(require(__dirname + "/routes/about"));

app.use((req, res) => {
    res.type("text/html");
    res.status(404);
    res.render("404");
    });

app.listen(app.get("port"), () => {
    // console.log("yas!");
});

module.exports = app;