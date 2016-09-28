const elixir = require('laravel-elixir');

require('laravel-elixir-replace2');

elixir.config.publicPath = 'build';
elixir.config.css.minifier.pluginOptions = {
  compatibility: 'ie7',
  keepSpecialComments: 0
};

/**
 * Custom third-party packages.
 *
 * You do not need to do this in your app, just use the result file in holly-packages directly.
 */
elixir(mix => {

  // AdminLTE
  mix.replace(
      'node_modules/admin-lte/build/less/AdminLTE.less',
      /(@import[^";]*")([^";]+.*)/gi,
      '$1node_modules/admin-lte/build/less/$2',
      'admin-lte/AdminLTE.less'
    )
    .replace(
      'admin-lte/AdminLTE.less',
      /(.+url\(http.+)/gi,
      '// $1'
    );

  // Bootbox
  mix.scripts([
    './node_modules/bootbox/bootbox.js',
    './bootbox/bootbox-fix.js'
  ], getMinifyPath('bootbox/bootbox.js'));

});
return;

/**
 * Examples for Laravel Elixir usage.
 */
elixir(mix => {

  // AdminLTE
  mix.less([
      './admin-lte/AdminLTE.less',
      './node_modules/admin-lte/build/less/skins/_all-skins.less',
      './admin-lte/AdminLTE-fix.less',
      './admin-lte/AdminLTE-custom.less'
    ], 'build/css/AdminLTE.css')
    .scripts([
      './admin-lte/AdminLTEOptions.js',
      './node_modules/admin-lte/dist/js/app.js',
      './admin-lte/AdminLTE-fix.js',
      './admin-lte/AdminLTE-custome.js'
    ], 'build/js/AdminLTE.js')
    .copy('node_modules/admin-lte/dist/img/boxed-bg.jpg', 'build/img');

  // Bootstrap
  mix.less('./bootstrap/bootstrap.less');
  // or sass:
  // mix.sass('./bootstrap-sass/_bootstrap.scss');

  // dataTables
  mix.styles([
      './node_modules/datatables.net-bs/css/dataTables.bootstrap.css',
      './node_modules/datatables.net-responsive-bs/css/responsive.bootstrap.css',
      './datatables.net/datatables-fix.css'
    ], 'build/css/dataTables.css')
    .scripts([
      "./node_modules/datatables.net/js/jquery.dataTables.js",
      "./node_modules/datatables.net-bs/js/dataTables.bootstrap.js",
      "./node_modules/datatables.net-responsive/js/dataTables.responsive.js",
      "./node_modules/datatables.net-responsive-bs/js/responsive.bootstrap.js",
      "./datatables.net/datatablesDefaults.js",
    ], 'build/js/dataTables.js');

  // FastClick
  mix.scripts([
    './node_modules/fastclick/lib/fastclick.js',
    './fastclick/attach.js'
  ], 'build/js/fastclick.js');

  // Font-Awesome
  mix.sass('./node_modules/font-awesome/scss/font-awesome.scss')
    .copy('./node_modules/font-awesome/fonts', 'build/fonts');

  // lightbox2
  mix.replace('./node_modules/lightbox2/src/css/lightbox.css', [
      ['../images/', '../img/lightbox/']
    ], './lightbox2/lightbox.css')
    .copy('./node_modules/lightbox2/src/js/lightbox.js', 'build/js')
    .copy('./node_modules/lightbox2/src/images', 'build/img/lightbox');

});

/**
 * Append ".min" to file path in production.
 *
 * @param  {string} path
 * @return {string}
 */
function getMinifyPath(path) {
  return elixir.inProduction ? path.replace(/(\.[^\.]+)/, '.min$1') : path;
}
