;
(function(swal) {
  "use strict";

  window.swalApi = function (json, options) {
    if (typeof(options) != 'object') {
      options = {};
    }

    var type = null;
    if (json === undefined || json.code === undefined) {
      options.html = 'swalApi exception: invalid api response.';
    } else if (1 == json.code) {
      type = 'success'
      options.html = (json.msg !== undefined ? json.msg : '操作成功！');
    } else {
      type = 'error';
      var msg = (json.msg !== undefined ? json.msg : '操作失败！');
      if (msg.indexOf('\n') > -1) {
        msg = msg.replace(/\n/g, '<br>');
      }
      options.html = msg;
    }

    if (typeof(options.type) === "undefined") {
      options.type = type;
    }

    return swal(options);
  };
})(window, Sweetalert2);
