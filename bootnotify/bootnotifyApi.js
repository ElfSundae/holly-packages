/**
 * Notify API result.
 *
 * Usage:
 * $(...).bootnotifyApi({code: 1, msg: 'message'}, {position: 'top'})
 */
;(function($) {
  "use strict";

  $.fn.bootnotifyApi = function(json, options) {
    $(this).bootnotify(false);

    if (typeof(options) != 'object') {
      options = {};
    }

    var type = 'success';
    if (json === undefined || json.code === undefined) {
      type = 'danger';
      options.message = 'bootnotifyApi exception: invalid JSON.';
    } else if (1 == json.code) {
      options.message = (json.msg !== undefined ? json.msg : 'Succeed!');
    } else {
      type = 'danger';
      var msg = (json.msg !== undefined ? json.msg : 'Failed!');
      if (msg.indexOf('\n') > -1) {
        msg = msg.replace(/\n/g, '<br>');
      }
      options.message = msg;
    }

    return $(this).bootnotify(options, type);
  };
})(jQuery);
