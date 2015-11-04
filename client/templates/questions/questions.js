// if (Meteor.isClient) {

  Template.questions.helpers({
    whichOne: function () {
      return Session.get('currentModule');
    }
  });

// }