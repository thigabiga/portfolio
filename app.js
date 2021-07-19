const express = require('express');

const exphbs = require('express-handlebars');

const app = express();

// Configure template Engine and Main Template File
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

// Setting template Engine
app.set('view engine', 'hbs');

// Static content
app.use(express.static(__dirname + "/public"));

// routes
app.use(require(__dirname + "/routes/home"));
app.use(require(__dirname + "/routes/project"));
app.use(require(__dirname + "/routes/about"));

// port where app is served
require('dotenv').config();
const port = process.env.PORT
app.listen(port, () => {
    console.log('The web server has started on port: ' + port);
});

app.get('/', (req, res) => {
    res.render('home', { msg: 'This is home page'});
});

app.get('/about', (req, res) => {
    res.render('about', { msg: 'This is about page'});
});