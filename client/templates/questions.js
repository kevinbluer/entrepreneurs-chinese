// if (Meteor.isClient) {

  Template.questions.helpers({
    questions: function () {
      return questions.find();
    }
  });

// }