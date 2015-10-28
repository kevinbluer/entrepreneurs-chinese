if (Meteor.isClient) {

	Session.set("moduleProgress", 5);

	Template.module1.helpers({
		progress: function() {
			return Session.get("moduleProgress");
		}
	});

	Template.module1.events({
		"click #next1": function() {

			// get the current progress
			var progress = Session.get("moduleProgress");

			// update the progress (incrementing accordingly)
			Session.set("moduleProgress", progress + 5);

			// increment the user's score (note that we need to handle this properly)
			if (isNaN(Session.get("userScore"))) {
				Session.set("userScore", 5);
			} else {
				Session.set("userScore", Session.get("userScore") + 5);
			}

			// update the user's score
			Meteor.users.update( { _id: Meteor.userId() }, { 
				$set: { 'profile.score': Session.get("userScore") }
			});

			// hide the current panel (and show the next one)
			$("#section1").hide();
			$("#section2").show();

			// TODO save the progress to the user's account (make this a global attribute that is visible througout the app)
		}
	})

	Template.module1.events({
		"click #back2": function() {

			var progress = Session.get("moduleProgress");

			Session.set("moduleProgress", progress - 5);

			$("#section1").show();
			$("#section2").hide();
		}
	})
	
}