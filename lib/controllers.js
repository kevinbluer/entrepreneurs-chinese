ProfileController = RouteController.extend({
    template:"user",
    waitOn:function(){
        return Meteor.subscribe("userProfile",this.params.username);
    }
});