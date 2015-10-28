if (Meteor.isClient) {

	if (Meteor.user()) {
		Session.set("userScore", Meteor.user().profile.score);
	}

	Template.main.helpers({
	    isLoggedIn: function(){
	        return Meteor.userId();
	    },

	    userScore: function() {
	        return Session.get("userScore");
	    }
	})

	Accounts.ui.config({
	    requestPermissions: {},
	    extraSignupFields: [{
	        fieldName: 'firstName',
	        fieldLabel: 'First name',
	        inputType: 'text',
	        visible: true,
	        validate: function(value, errorFunction) {
	          if (!value) {
	            errorFunction("Please write your first name");
	            return false;
	          } else {
	            return true;
	          }
	        }
	    }, {
	        fieldName: 'lastName',
	        fieldLabel: 'Last name',
	        inputType: 'text',
	        visible: true,
	    }, {
	        fieldName: 'gender',
	        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
	        fieldLabel: 'Gender',
	        inputType: 'radio',
	        radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
	        data: [{                    // Array of radio options, all properties are required
	            id: 1,                  // id suffix of the radio element
	            label: 'Male',          // label for the radio element
	            value: 'm'              // value of the radio element, this will be saved.
	          }, {
	            id: 2,
	            label: 'Female',
	            value: 'f',
	            checked: 'checked'
	        }],
	        visible: true
	    },	{
	        fieldName: 'terms',
	        fieldLabel: 'I accept the terms and conditions',
	        inputType: 'checkbox',
	        visible: true,
	        saveToProfile: false,
	        validate: function(value, errorFunction) {
	            if (value) {
	                return true;
	            } else {
	                errorFunction('You must accept the terms and conditions.');
	                return false;
	            }
	        }
	    }]
	});

}