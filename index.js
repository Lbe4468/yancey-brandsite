const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5002;
app.listen(PORT);
console.log("Listening on port ", PORT);

// Express-handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

// Index Route
app.get('/', function (req, res) {

    var scripts = [
        'https://s3-us-west-2.amazonaws.com/response-web/vendor/slick/slick.min.js',
        'js/slick.init.js'
    ];
    var stylesheets = [
        'https://s3-us-west-2.amazonaws.com/response-web/vendor/slick/slick.css'
    ]

    res.render('index', {
        title: 'Scott Yancey - Real Estate Investor, Star of Flipping Vegas',
        scripts: scripts,
        stylesheets: stylesheets,
        bodyClass: 'home'
    });

});

// Pay it Forward Route
app.get('/paying-it-forward', function (req, res) {

    res.render('pay-forward', {
        title: 'Paying It Forward - Scott Yancey',
        bodyClass: 'sub-hero'
    });

});

// About Us Route
app.get('/about-us', function (req, res) {

    res.render('about-us', {
        title: 'About Us - Scott Yancey',
        bodyClass: 'sub-hero'
    });

});

// Events Us Route
app.get('/events', function (req, res) {

    var scripts = [
        '../js/reg-forward.js'
    ];
    var stylesheets = [
        '../css/regform.css'
    ]

    res.render('events', {
        title: 'Events - Scott Yancey',
        bodyClass: 'sub-hero',
        scripts: scripts,
        stylesheets: stylesheets,
    });

});

// Diversification Us Route
app.get('/diversification', function (req, res) {

    res.render('diversification', {
        title: 'Diversification - Scott Yancey',
        bodyClass: 'sub-hero',
    });

});

// Play Hard Us Route
app.get('/play-hard', function (req, res) {

    var scripts = [
        'https://s3-us-west-2.amazonaws.com/response-web/vendor/swipebox/js/jquery.swipebox.min.js',
        '../js/swipebox.init.js',
        'https://s3-us-west-2.amazonaws.com/response-web/vendor/slick/slick.min.js',
        '../js/slick.init.js'
    ];
    var stylesheets = [
        'https://s3-us-west-2.amazonaws.com/response-web/vendor/slick/slick.css',
        'https://s3-us-west-2.amazonaws.com/response-web/vendor/swipebox/css/swipebox.min.css'
    ]

    res.render('play-hard', {
        title: 'Play Hard - Scott Yancey',
        bodyClass: 'sub-hero sub-slider',
        scripts: scripts,
        stylesheets: stylesheets,
    });

});

// Flipping Vegas Route
app.get('/flipping-vegas', function (req, res) {

    res.render('flipping-vegas', {
        title: 'Flipping Vegas - Scott Yancey',
        bodyClass: 'sub-page',
    });

});

// Media Route
app.get('/media', function (req, res) {

    res.render('media', {
        title: 'Media - Scott Yancey',
        bodyClass: 'sub-page',
    });

});

// Contact Us Route
app.get('/contact-us', function (req, res) {

    res.render('contact-us', {
        title: 'Contact Us - Scott Yancey',
        bodyClass: 'sub-page',
    });

});

// FAQ Route
app.get('/faq', function (req, res) {

    res.render('faq', {
        title: 'FAQ - Scott Yancey',
        bodyClass: 'sub-page',
    });

});

// Terms & Conditions Route
app.get('/terms-and-conditions', function (req, res) {

    res.render('terms', {
        title: 'Terms & Conditions - Scott Yancey',
        bodyClass: 'sub-page',
    });

});

// Privacy Policy Route
app.get('/privacy-policy', function (req, res) {

    res.render('privacy-policy', {
        title: 'Privacy Policy - Scott Yancey',
        bodyClass: 'sub-page',
    });

});