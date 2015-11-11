if (Meteor.isClient) {

	Template.dashboard.events({
		"click #module1": function (event) {

			var user = Meteor.user();

			// if the user has never started the module, adjust the progress to started
			if (!user.profile.modules.one) {

				Meteor.users.update( { _id: Meteor.userId() }, { 
					$set: { 'profile.modules.one' : 1 }
				});
				Session.set("moduleOneProgress", 1);

			} else {

				Session.set("moduleOneProgress", user && user.profile && user.profile.modules.one);
			}

			Router.go('module', { moduleId: 1 });
		},
		"click #module2": function (event) {

			var user = Meteor.user();

			// if the user has never started the module, adjust the progress to started
			if (!user.profile.modules.two) {

				Meteor.users.update( { _id: Meteor.userId() }, { 
					$set: { 'profile.modules.two' : 1 }
				});
				Session.set("moduleTwoProgress", 1);

			} else {

				Session.set("moduleTwoProgress", user && user.profile && user.profile.modules.two);
			}

			Router.go('module', { moduleId: 2 })
		}
	});

	Template.dashboard.helpers({
		modules: function() {

			var user = Meteor.user();

			return user && user.profile && user.profile.modules;
		},

		calculateProgress: function(progress) {
			return progress * 20;
		}
	});
}