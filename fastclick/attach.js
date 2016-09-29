/**
 * Enable FastClick.
 *
 * @see https://github.com/ftlabs/fastclick#usage
 */
;
(function() {
  "use strict";

  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }
})();
