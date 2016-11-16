;
(function(window) {
  "use strict";

  var originalSwal = window.Sweetalert2;

  window.Sweetalert2 = window.sweetAlert = window.swal = function() {
    return originalSwal.apply(null, arguments).catch(function() {});
  };
})(window);
