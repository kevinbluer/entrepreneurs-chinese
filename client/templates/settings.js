if (Meteor.isClient) {
	Template.settings.helpers({
	    user: function(){
	        return Meteor.user().emails[0].address;
	    }
	})
}