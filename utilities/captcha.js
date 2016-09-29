;
(function($) {
  "use strict";

  /**
   * The captcha image URL.
   *
   * @type {String}
   */
  if (!window.CAPTCHA_URL) {
    window.CAPTCHA_URL = '/captcha';
  }

  /**
   * Refresh captchas image.
   *
   * @param  {Object} input    The input element which will be cleared.
   */
  $.fn.refreshCaptcha = function(input) {
    if (!this.length) {
      return this;
    }

    $(this).find('img.captcha').attr('src', CAPTCHA_URL + '?' + Math.random().toString(36).substring(7));

    if (input === undefined) {
      input = $('input.captcha');
    }

    if (input) {
      $(input).val('');
    }

    return this;
  };
})(jQuery);
