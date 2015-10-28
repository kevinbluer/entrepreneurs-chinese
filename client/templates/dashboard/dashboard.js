if (Meteor.isClient) {
	Template.dashboard.events({
		"click #module1": function (event) {
			Router.go('module', { moduleId: 1 });
		},
		"click #module2": function (event) {
			Router.go('module', { moduleId: 2 })
		}
	});
}