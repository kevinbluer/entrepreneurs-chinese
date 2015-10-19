Router.configure({
	layoutTemplate: 'main'
})

Router.route('/', function () {
  this.render('home');
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/settings', function () {
  
  if (Meteor.userId()) {
    this.render('settings');
  } else {
    this.render('login');
  }

});

Router.route('/questions/:moduleId', function () {

 	Session.set("currentModule", "module" + this.params.moduleId);
	this.render('questions');
  
}, {
	name: 'module'
}); 

Router.route('/dashboard', function () {

  if (Meteor.userId()) {
    this.render('dashboard');
  } else {
    this.render('login');
  }
  
}); 

Router.route('leaderboard', function () {
	this.render('leaderboard');
});