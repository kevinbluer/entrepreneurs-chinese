if (Meteor.isClient) {
	Template.settings.helpers({

		email: function(){
	        return Meteor.user().emails[0];
	    },

	    user: function(){
	        return Meteor.user().profile;
	    }
	})

	Template.settings.events({
		"click #update": function(event) {

			event.preventDefault();

			Meteor.users.update( { _id: Meteor.userId() }, { 
				$set: { 
					'profile.firstName': $("#inputFirstName").val(),
					'profile.lastName': $("#inputLastName").val()
				}
			});

		}
	})
}