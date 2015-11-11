if (Meteor.isClient) {

	Template.module1.onRendered(function () {

		// jump to user's appropriate progress distance
		var moduleProgress = Session.get("moduleOneProgress");
		if (moduleProgress > 1) {
			$("#section1").hide();
			$("#section" + moduleProgress).show();
		}

	});

	Template.module1.helpers({
		progress: function() {

			return (100 / 5) * Session.get("moduleOneProgress");
		}
	});

	Template.module1.events({
		"click #next1": function() {

			increaseProgress();

			$("#section1").hide();
			$("#section2").show();
		},
		"click #back2": function() {

			decreaseProgress();

			$("#section1").show();
			$("#section2").hide();
		}, 
		"click #next2": function() {

			increaseProgress();

			$("#section2").hide();
			$("#section3").show();
		},
		"click #back3": function() {

			decreaseProgress();

			$("#section2").show();
			$("#section3").hide();
		}, 
		"click #next3": function() {

			increaseProgress();

			$("#section3").hide();
			$("#section4").show();
		},
		"click #back4": function() {

			decreaseProgress();

			$("#section3").show();
			$("#section4").hide();
		}, 
		"click #next4": function() {

			increaseProgress();

			$("#section4").hide();
			$("#section5").show();
		},	
		"click #back5": function() {

			decreaseProgress();

			$("#section4").show();
			$("#section5").hide();
		}, 
		"click #complete": function() {

			Router.go('dashboard');
		}	
	})

	function decreaseProgress() {

		var progress = Session.get("moduleOneProgress");
		Session.set("moduleOneProgress", progress - 1);
	}

	function increaseProgress() {

		if (Session.get("moduleOneProgress") === null) {
			Session.set("moduleOneProgress", 1);
		} else {
			Session.set("moduleOneProgress", Session.get("moduleOneProgress") + 1);
		}

		// increment the user's score (note that we need to handle this properly)
		if (isNaN(Session.get("userScore"))) {
			Session.set("userScore", 10);
		} else {
			Session.set("userScore", Session.get("userScore") + 10);
		}

		// update the user's score + progress
		Meteor.users.update( { _id: Meteor.userId() }, { 
			$set: { 'profile.score': Session.get("userScore"), 'profile.modules.one' : Session.get("moduleOneProgress") }
		});

	}

}