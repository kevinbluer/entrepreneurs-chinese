if (Meteor.isClient) {

	Template.main.helpers({
	    isLoggedIn: function(){
	        return Meteor.userId();
	    }
	})

}