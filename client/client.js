/**
* Templates
*/

Template.messages.messages = function () {
  return Messages.find({}, { sort: { time: -1 }});
}

Template.input.events = {
  'keydown input#message': function(event) {
    if(event.which == 13){
      if (Meteor.user()){
        var name = Meteor.user().username;
      }
      else{
        var name = 'Anonymous';
      }

      var message = document.getElementById('message');

      if(message.value != ''){
        Messages.insert({
          name: name,
          message: message.value,
          time: Date.now(),
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
}

Template.user_register_form.events({
  "click #register": function(e, tpl) {
    var email = tpl.find("#email").value;
    var user = tpl.find("#user").value;
    var pass = tpl.find("#pass").value;
    Accounts.createUser({
      "email": email,
      "username": user,
      "password": pass
    });
  }
})

Template.user_logged_in.events({
  "click #logout": function(e, tpl) {
    Meteor.logout(function(err) {
      if(err){
        console.log(err);
      }
    })
  }
})

Handlebars.registerHelper("log", function(context) {
  return console.log(context);
});
