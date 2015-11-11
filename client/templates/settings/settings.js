if (Meteor.isClient) {
	Template.settings.helpers({

		email: function() {
			var user = Meteor.user();
	        return user && user.emails[0];
	    },

	    user: function() {
	    	var user = Meteor.user();
	        return user && user.profile;
	    }
	})

	Template.settings.events({
		"click #update": function(event) {

			event.preventDefault();

			Meteor.users.update( { _id: Meteor.userId() }, { 
				$set: { 
					'profile.firstName': $("#inputFirstName").val(),
					'profile.lastName': $("#inputLastName").val(),
					'profile.about': $("#inputAbout").val()
				}
			});

		}
	})
}