if (Meteor.isClient) {

	Template.leaderboard.onCreated(function() {
	  var self = this;
	  self.autorun(function() {
	    self.subscribe('userData');  
	  });
	});

	Template.leaderboard.helpers({
		leaderboard: function() {
			return Meteor.users.find();
		},
		isCurrentUser: function() {
			return this.username === Meteor.user().username;
		}
	})
}