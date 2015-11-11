if (Meteor.isClient) {

	Template.module2.onRendered(function () {

		// jump to user's appropriate progress distance
		var moduleProgress = Session.get("moduleTwoProgress");
		if (moduleProgress > 1) {
			$("#section1").hide();
			$("#section" + moduleProgress).show();
		}

	});

	Template.module2.helpers({
		progress: function() {

			return (100 / 2) * Session.get("moduleTwoProgress");
		}
	});

	Template.module2.events({
		"click #next1": function() {

			increaseProgress();

			$("#section1").hide();
			$("#section2").show();
		},
		"click #back2": function() {

			decreaseProgress();

			$("#section1").show();
			$("#section2").hide();
			
		}, "click #complete": function() {

			increaseProgress();

			Router.go('dashboard');
		}
	});

	// TODO - do this better :)

	function decreaseProgress() {

		var progress = Session.get("moduleTwoProgress");
		Session.set("moduleTwoProgress", progress - 1);
	}

	function increaseProgress() {

		if (Session.get("moduleTwoProgress") === null) {
			Session.set("moduleTwoProgress", 1);
		} else {
			Session.set("moduleTwoProgress", Session.get("moduleTwoProgress") + 1);
		}

		// increment the user's score (note that we need to handle this properly)
		if (isNaN(Session.get("userScore"))) {
			Session.set("userScore", 10);
		} else {
			Session.set("userScore", Session.get("userScore") + 10);
		}

		// update the user's score + progress
		Meteor.users.update( { _id: Meteor.userId() }, { 
			$set: { 'profile.score': Session.get("userScore"), 'profile.modules.one' : Session.get("moduleTwoProgress") }
		});

	}

}