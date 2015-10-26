if (Meteor.isClient) {

	Session.set("moduleProgress", 5);

	// show / hide the appropriate panel
	// save the progress to the user's account (make this a global attribute that is visible througout the app)

	Template.module1.helpers({
		progress: function() {
			return Session.get("moduleProgress");
		}
	});

	Template.module1.events({
		"click #next1": function() {

			var progress = Session.get("moduleProgress");

			Session.set("moduleProgress", progress + 5);

			$("#section1").hide();
			$("#section2").show();
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