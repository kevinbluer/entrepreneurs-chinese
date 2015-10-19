if (Meteor.isClient) {
	Template.settings.helpers({
	    user: function(){
	        return Meteor.user().email;
	    }
	})
}