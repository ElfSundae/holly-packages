(function($) {
  "use strict";

  /**
   * Find the closest "tr" for this element.
   *
   * If the Responsive extension is enabled, `$.fn.closest('tr')` may return
   * the child view when there's one, this function fixes this issue.
   */
  $.fn.dataTableRow = function () {
    var $row = $(this).closest('tr');
    if ($row.hasClass('child')) {
      $row = $row.prev('tr.parent');
    }
    return $row;
  };
})(jQuery);
