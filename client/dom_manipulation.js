//jQuery dom manipulation
(function($){
  // Fix input element click problem
  $('.user input, .user button, .user-register-form, .login-form').live("click", function(e) {
    e.stopPropagation();
  });
})(jQuery);
