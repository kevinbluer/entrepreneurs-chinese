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
		}, "click #complete": function() {

			Router.go('dashboard');
		}
	});

}