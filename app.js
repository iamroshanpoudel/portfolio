const express = require('express');
const app = express();
app.set('view engine', 'ejs');

// '/' home page
app.get('/', function (req, res) {
    res.render('home');
});

// '/*' unknown links = redirect to homepage
app.get('/*', function (req, res) {
    res.redirect('/');
});


// start listening at port 3000
app.listen(5000, function () {
    console.log("Roshan's Porfolio Server has started!");
});