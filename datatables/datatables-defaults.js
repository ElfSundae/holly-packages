(function($) {
  "use strict";

  $.extend($.fn.dataTable.defaults, {
    "pagingType": "full_numbers",
    "language": {
      "emptyTable": "<span style='color:red'>无数据</span>",
      "info": "当前 _START_-_END_ 项，共 _TOTAL_ 项",
      "infoEmpty": "",
      "infoFiltered": "<span style='color:green'>（由 _MAX_ 项数据过滤）</span>",
      "lengthMenu": "显示 _MENU_ 项数据",
      "loadingRecords": "加载中...",
      "processing": '<div class="datatables-processing" style="color:#008d4c"><i class="fa fa-refresh fa-spin fa-lg fa-fw"></i> 处理中...</div>',
      "search": "<i class='fa fa-search'></i>",
      "searchPlaceholder": "搜索",
      "zeroRecords": "<span style='color:red'>没有匹配的数据</span>",
      "paginate": {
        "first": "<i class='fa fa-step-backward'></i>",
        "last": "<i class='fa fa-step-forward'></i>",
        "next": "<i class='fa fa-chevron-right'></i>",
        "previous": "<i class='fa fa-chevron-left'></i>"
      },
      "aria": {
        "sortAscending": ": 顺序排列",
        "sortDescending": ": 逆序排列"
      }
    },
  });
})(jQuery);
