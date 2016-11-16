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

    var type = 'info';
    if (json === undefined || json.code === undefined) {
      type = 'danger';
      options.message = 'bootnotifyApi exception: invalid api response.';
    } else if (1 == json.code) {
      type = 'success';
      options.message = (json.msg !== undefined ? json.msg : '操作成功！');
    } else {
      type = 'danger';
      var msg = (json.msg !== undefined ? json.msg : '操作失败！');
      if (msg.indexOf('\n') > -1) {
        msg = msg.replace(/\n/g, '<br>');
      }
      options.message = msg;
    }

    return $(this).bootnotify(options, type);
  };
})(jQuery);
