"use strict";

const express = require("express"),
      bodyParser = require("body-parser");
      
const handlebars = require("express-handlebars").create({defaultLayout:'main'});

const routes = require("./routes");

const app = express();

app.disable("x-powered-by");

app.engine("handlebars", handlebars.engine);

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: true}));

// app.set sets environment variable
app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    //console.log("looking for url" + req.url);
    next();
});

app.use(require("./routes/home"));
//app.use(require("./routes/about"));
//app.use(require("./routes/work"));
app.use(require("./routes/project"));

app.use((req, res) => {
    res.type("text/html");
    res.status(404);
    res.render("404");
    });

// attempted to refactor routes but didn't work
// app.use("/", routes.home);
// app.use("/about", routes.about);
// app.use("/code", routes.work);

app.listen(app.get("port"), () => {
    // console.log("yas!");
});

module.exports = app;