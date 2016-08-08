Template.HomeLayout.events({
  'submit form':function(event) {
    event.preventDefault();
    var email = event.target.loginEmail.value;
    var password = event.target.loginPassword.value;

    Meteor.loginWithPassword(email, password);
    console.log("Form submitted!");
  }
});
