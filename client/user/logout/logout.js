Template.user_logged_in.events({
  "click #logout": function(e, tpl) {
    Meteor.logout(function(err) {
      if(err){
        console.log(err);
      }
    })
  }
})
