;
(function($) {
  "use strict";

  /**
   * Find the closest "tr" for this element.
   */
  $.fn.dataTableRow = function () {
    var $row = $(this).closest('tr');
    if ($row.hasClass('child')) {
      $row = $row.prev('tr.parent');
    }
    return $row;
  };
})(jQuery);
