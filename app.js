// include and setup express
var express = require('express');
// include express handlebars (templating engine)
var exphbs  = require('express-handlebars');

var app = express();

var hbs = exphbs.create({defaultLayout: 'main'})	;

// setup handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// respond with the home page
app.get('/', function (req, res) {
    res.render('home');
});

// respond with the about page
app.get('/about', function(req, res) {
  res.render('about');
});

// respond with the regster page
app.get('/register', function(req, res) {
  res.render('register');
});

// handle the posted registration data
app.post('/register', function(req, res) {
  console.log('yo');
  res.redirect('/quiz');
});

// respond with the quiz page (and pass in some data to the template)
app.get('/quiz', function (req, res) {
    res.render('quiz', {
    	questions: [{
		    title: "Hello",
		    answer: "World!"
		},{
		    title: "Greetings",
		    answer: "Universe!"
		}]
    });
});

// setup our public directory (which will serve any file stored in the 'public' directory)
app.use(express.static('public'));

// create the server based on express
var server = require('http').createServer(app);

// start the server
server.listen(1337, '127.0.0.1', function () {
  console.log('Express server listening on %d', 1337);
});