;
(function($) {
  "use strict";

  /**
   * Add "X-CSRF-TOKEN" request header for Ajax, with value of meta named "csrf_token".
   *
   * @see https://laravel.com/docs/5.3/csrf#csrf-x-csrf-token
   */
  $.ajaxPrefilter(function(options, originalOptions, xhr) {
    if (! options.crossDomain) {
      var csrf_token = $('meta[name="csrf-token"]').attr('content');
      if (csrf_token) {
        xhr.setRequestHeader('X-CSRF-TOKEN', csrf_token);
      }
    }
  });
})(jQuery);
