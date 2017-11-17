/**
 * Requirement: captcha.js
 */
(function($) {
  "use strict";

  /**
   * Add "click" event handler for "a.captcha" links.
   */
  function applyCaptchaLinks() {
    $('a.captcha').click(function(e) {
      e.preventDefault();
      $(this).refreshCaptcha();
    }).trigger('click');
  }

  $(function() {
    applyCaptchaLinks();

    $('body').on('show.bs.modal', applyCaptchaLinks);
  });
})(jQuery);
