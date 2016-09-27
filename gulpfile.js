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
  mix.less('./admin-lte/AdminLTE.less');

  // Bootbox
  mix.scripts([
    './node_modules/bootbox/bootbox.js',
    './bootbox/bootbox-fixed.js'
  ], 'build/js/bootbox.js');

});
