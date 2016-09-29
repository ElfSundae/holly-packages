/**
 * Add "X-CSRF-TOKEN" request header for Ajax, with value of meta named "csrf_token".
 *
 * @see https://laravel.com/docs/5.3/csrf#csrf-x-csrf-token
 */
;
(function() {
  if (typeof jQuery !== "undefined") {
    $.ajaxPrefilter(function(options, originalOptions, xhr) {
      var csrf_token = $('meta[name="csrf-token"]').attr('content');
      if (csrf_token) {
        xhr.setRequestHeader('X-CSRF-TOKEN', csrf_token);
      }
    });
  }
}());
