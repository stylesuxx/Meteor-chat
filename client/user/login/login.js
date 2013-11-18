Template.login_form.events({
  "click #login": function(e, tpl) {
    var email = tpl.find("#email").value;
    var pass = tpl.find("#pass").value;
    Meteor.loginWithPassword(email, pass, function(err) {
      Session.set("login-error", "Check your credentials!");
      tpl.find("#email").value = "";
      tpl.find("#pass").value = "";
    });
  }
})

Template.login_form.error = function() {
  return Session.get("login-error");
}

Template.login_form.rendered = function() {
  delete Session.keys["login-error"];
  setTimeout(function(){
    $('.login-error').fadeOut("slow", function(){
      $('.login-error').remove();
    });
  }, 2000);
}
