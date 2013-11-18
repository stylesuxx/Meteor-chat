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
