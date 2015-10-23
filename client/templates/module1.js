if (Meteor.isClient) {

	Session.set("moduleProgress", 5);

	// show / hide the appropriate panel
	// save the progress to the user's account

	Template.module1.helpers({
		progress: function() {
			return Session.get("moduleProgress");
		}
	});

	Template.module1.events({
		"click #next1": function() {

			var progress = Session.get("moduleProgress");

			Session.set("moduleProgress", progress + 5);

			// Update user progress (and score)
		      // Tasks.insert({
		      //   text: text,
		      //   createdAt: new Date() // current time
		      // });
		}
	})
}