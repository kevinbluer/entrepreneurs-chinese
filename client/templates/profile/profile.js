if (Meteor.isClient) {
	Deps.autorun(function(){
	  Meteor.subscribe('userProfile');
	});
}