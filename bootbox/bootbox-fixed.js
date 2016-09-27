/**
 *
 * Fixed Bootbox
 *
 * 1. 自动检测浏览器语言。
 * 2. 设置 dialog 居中在浏览器显示。
 *
 * 2015-06-08
 */
;(function() {
  if (bootbox === undefined) {
    return;
  }

  var lang = (window.navigator.userLanguage || window.navigator.language);
  if (lang !== undefined && lang.length >= 2) {
    if (/zh[\-_](CN|TW)/i.test === true || /bg[\-_]BG/i.test === true) {
      lang = lang.substring(0, 2).toLowerCase() + '_' + lang.substring(3).toUpperCase();
    } else {
      lang = lang.substring(0, 2).toLowerCase();
    }
    if (lang === 'zh') {
      lang = 'zh_CN';
    } else if (lang === 'bg') {
      lang = 'bg_BG';
    }
    bootbox.setLocale(lang);
  }

  var oldDialog = bootbox.dialog;
  bootbox.dialog = function(opt) {

    function centerModal() {
      $(this).css('display', 'block');
      var $dialog = $(this).find(".modal-dialog"),
        offset = ($(window).height() - $dialog.height()) / 3,
        bottomMargin = parseInt($dialog.css('marginBottom'), 10);

      // Make sure you don't hide the top part of the modal w/ a negative margin
      // if it's longer than the screen height, and keep the margin equal to
      // the bottom margin of the modal
      if (offset < bottomMargin) offset = bottomMargin;
      $dialog.css("margin-top", offset);
    }

    var show = opt.show === false ? false : true;
    opt.show = false;

    var dialog = oldDialog(opt);

    dialog.on('show.bs.modal', centerModal);
    $(window).on("resize", function() {
      $('.modal:visible').each(centerModal);
    });

    if (show) {
      dialog.modal("show");
    }

    return dialog;
  };

}());
