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

  if (! Meteor.userId()) {
    this.render('login');
  } else {
    this.render('questions');
  }
  
}); 