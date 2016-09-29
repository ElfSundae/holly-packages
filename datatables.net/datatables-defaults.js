;
(function($) {
  "use strict";

  $.extend($.fn.dataTable.defaults, {
    "responsive": true,
    "processing": true,
    "serverSide": true,
    "pagingType": "full_numbers",
    "language": {
      "emptyTable": "<span style='color:red'>无数据</span>",
      "info": "共计: _TOTAL_ 当前:_START_-_END_",
      "infoEmpty": "",
      "infoFiltered": "<span style='color:green'>(已从_MAX_条数据中筛选)</span>",
      "lengthMenu": "每页显示 _MENU_ 条数据",
      "loadingRecords": "Loading...",
      "processing": '<div class="datatables-processing" style="color:#008d4c"><i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> 加载中...</div>',
      "search": "<i class='fa fa-search'></i>",
      "zeroRecords": "<span style='color:red'>没有匹配的数据</span>",
      "paginate": {
        "first": "<i class='fa fa-step-backward'></i>",
        "last": "<i class='fa fa-step-forward'></i>",
        "next": "<i class='fa fa-chevron-right'></i>",
        "previous": "<i class='fa fa-chevron-left'></i>"
      },
      "aria": {
        "sortAscending": ": 顺序排序",
        "sortDescending": ": 逆序排序"
      }
    },
  });
})(jQuery);
