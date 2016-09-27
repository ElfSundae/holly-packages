/*!
 * This is an example for elixir usage.
 */

const elixir = require('laravel-elixir');

elixir.config.publicPath = 'build';
elixir.config.css.minifier.pluginOptions = {
  compatibility: 'ie7',
  keepSpecialComments: 0
};

elixir(mix => {

  // Bootstrap
  mix.less('./bootstrap/bootstrap.less');
  // mix.sass('./bootstrap-sass/_bootstrap.scss');

  // AdminLTE
  mix.less([
      './admin-lte/AdminLTE.less',
      './node_modules/admin-lte/build/less/skins/_all-skins.less',
      './admin-lte/AdminLTE-fixed.less'
    ], 'build/css/AdminLTE.css')
    .scripts([
      './admin-lte/AdminLTEOptions.js',
      './node_modules/admin-lte/dist/js/app.js',
      './admin-lte/AdminLTE-fixed.js'
    ], 'build/js/AdminLTE.js')
    .copy('./node_modules/admin-lte/dist/img/boxed-bg.jpg', 'build/img');

  // Bootbox
  mix.scripts([
    './node_modules/bootbox/bootbox.js',
    './bootbox/bootbox-fixed.js'
  ], 'build/js/bootbox.js');

});
