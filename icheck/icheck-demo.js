function launchICheck() {
  $('.icheck > input, input.icheck').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    increaseArea: '20%'
  });
}


(function($) {
  "use strict";

  $(function() {
    launchICheck();

    $('body').on('show.bs.modal', launchICheck);
  });
})(jQuery);
