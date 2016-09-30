;
(function($) {
  "use strict";

  /**
   * The default skin name.
   */
  if (!window.iCheckDefaultSkin) {
    window.iCheckDefaultSkin = 'square-blue';
  }

  /**
   * The easier way to enable iCheck.
   *
   * @param  {string} skin
   * @param  {Function} callback
   */
  $.fn.icheck = function(skin, callback) {
    if (typeof skin === 'undefined') {
      skin = window.iCheckDefaultSkin;
    }

    return $(this).iCheck({
        checkboxClass: 'icheckbox_' + skin,
        radioClass: 'iradio_' + skin,
        increaseArea: '20%'
      },
      callback);
  };

  /**
   * Enable iCheck for all inputs.
   */
  window.icheckInputs = function(skin, callback) {
    $('.icheck > input, input.icheck').icheck(skin, callback);
  };

  $(function() {
    icheckInputs();

    $('body').on('show.bs.modal', icheckInputs);
  });
})(jQuery);
