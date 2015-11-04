if (Meteor.isClient) {

	var user = Meteor.user();
	Session.set("moduleProgress", user && user.profile && user.profile.modules.one);

	Template.module1.helpers({
		progress: function() {
			return Session.get("moduleProgress");
		}
	});

	Template.module1.events({
		"click #next1": function() {

			updateProgress();

			// hide the current panel (and show the next one)
			$("#section1").hide();
			$("#section2").show();
		},
		"click #back2": function() {

			var progress = Session.get("moduleProgress");

			Session.set("moduleProgress", progress - 10);

			$("#section1").show();
			$("#section2").hide();
		}, 
		"click #next2": function() {

			updateProgress();

			// hide the current panel (and show the next one)
			$("#section2").hide();
			$("#section3").show();
		},
		"click #back3": function() {

			var progress = Session.get("moduleProgress");

			Session.set("moduleProgress", progress - 10);

			$("#section2").show();
			$("#section3").hide();
		}
	})

	function updateProgress() {
		
		// set the latest progress
		var progress = Session.get("moduleProgress") + 10;

		// update the progress (incrementing accordingly)
		Session.set("moduleProgress", progress);

		// increment the user's score (note that we need to handle this properly)
		if (isNaN(Session.get("userScore"))) {
			Session.set("userScore", 10);
		} else {
			Session.set("userScore", Session.get("userScore") + 10);
		}

		// update the user's score + progress
		Meteor.users.update( { _id: Meteor.userId() }, { 
			$set: { 'profile.score': Session.get("userScore"), 'profile.modules.one' : progress }
		});

	}
	
}