Router.configure({
	layoutTemplate: 'main'
})

Router.route('/', function () {
  this.render('home');
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/questions', function () {
  this.render('questions');
});