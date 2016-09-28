const elixir = require('laravel-elixir');

require('laravel-elixir-replace2');

elixir.config.css.minifier.pluginOptions = {
  compatibility: 'ie7',
  keepSpecialComments: 0
};

elixir.config.publicPath = 'build';

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
      'admin-lte'
    )
    .replace(
      'admin-lte/AdminLTE.less',
      /(.+url\(http.+)/gi,
      '// $1'
    )
    .less([
        './admin-lte/AdminLTE.less',
        './node_modules/admin-lte/build/less/skins/_all-skins.less',
        './admin-lte/AdminLTE-fix.less',
        './admin-lte/AdminLTE-custom.less'
      ],
      getMinifyPath('admin-lte/dist/css/AdminLTE.css')
    )
    .scripts([
        './admin-lte/AdminLTEOptions.js',
        './node_modules/admin-lte/dist/js/app.js',
        './admin-lte/AdminLTE-fix.js',
        './admin-lte/AdminLTE-custom.js'
      ],
      getMinifyPath('admin-lte/dist/js/AdminLTE.js')
    )
    .copy(
      'node_modules/admin-lte/dist/img/boxed-bg.jpg',
      'admin-lte/dist/img'
    );

  // Bootbox
  mix.scripts([
      './node_modules/bootbox/bootbox.js',
      './bootbox/bootbox-fix.js'
    ],
    getMinifyPath('bootbox/dist/bootbox.js')
  );

  // Bootstrap
  mix.replace(
      'node_modules/bootstrap/less/bootstrap.less',
      /(@import[^";]*")([^";]+.*)/gi,
      '$1node_modules/bootstrap/less/$2',
      'bootstrap'
    )
    .replace(
      'node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss',
      /(@import[^";]*")([^";]+.*)/gi,
      '$1node_modules/bootstrap-sass/assets/stylesheets/$2',
      'bootstrap'
    )
    .replace([
        'bootstrap/bootstrap.less',
        'bootstrap/_bootstrap.scss'
      ],
      /(.+glyphicons.+)/gi,
      '// $1',
      'bootstrap'
    );

  // dataTables
  mix.styles([
        './node_modules/datatables.net-bs/css/dataTables.bootstrap.css',
        './node_modules/datatables.net-responsive-bs/css/responsive.bootstrap.css',
        './datatables.net/datatables-fix.css'
      ],
      getMinifyPath('datatables.net/dist/css/dataTables-responsive-bs.css')
    )
    .scripts([
        "./node_modules/datatables.net/js/jquery.dataTables.js",
        "./node_modules/datatables.net-bs/js/dataTables.bootstrap.js",
        "./node_modules/datatables.net-responsive/js/dataTables.responsive.js",
        "./node_modules/datatables.net-responsive-bs/js/responsive.bootstrap.js",
        "./datatables.net/datatablesDefaults.js",
      ],
      getMinifyPath('datatables.net/dist/js/dataTables-responsive-bs.js')
    );

  // FastClick
  mix.scripts([
      './node_modules/fastclick/lib/fastclick.js',
      './fastclick/attach.js'
    ],
    getMinifyPath('fastclick/dist/fastclick.js')
  );

  // iCheck
  var icheckSkins = [
    'flat', 'futurico', 'line', 'minimal', 'polaris', 'square'
  ];

  icheckSkins.forEach(function(skin) {
    mix = mix.replace(
        'node_modules/icheck/skins/' + skin + '/*.css',
        /(url\()([^\.]+.png\))/gi,
        '$1../img/icheck/' + skin + '/$2',
        'icheck/css/skins/' + skin
      )
      .copy(
        'node_modules/icheck/skins/' + skin + '/*.png',
        'icheck/img/icheck/' + skin
      );
  });

  mix.styles([
        './icheck/css/skins/flat/_all.css',
        './icheck/css/skins/futurico/futurico.css',
        './icheck/css/skins/line/_all.css',
        './icheck/css/skins/minimal/_all.css',
        './icheck/css/skins/polaris/polaris.css',
        './icheck/css/skins/square/_all.css'
      ],
      'icheck/css/skins/all.css'
    )
    .copy(
      'node_modules/icheck/icheck.js',
      'icheck/js'
    );

  // lightbox2
  mix.replace(
      'node_modules/lightbox2/src/css/lightbox.css',
      '../images/',
      '../img/lightbox/',
      'lightbox2'
    )
    .styles(
      './lightbox2/lightbox.css',
      getMinifyPath('lightbox2/dist/css/lightbox.css')
    )
    .scripts(
      './node_modules/lightbox2/src/js/lightbox.js',
      getMinifyPath('lightbox2/dist/js/lightbox.js')
    )
    .copy(
      'node_modules/lightbox2/dist/images',
      'lightbox2/dist/img/lightbox'
    );

});

/**
 * Examples for Laravel Elixir usage.
 */
elixir(mix => {

  // Bootstrap
  mix.less('./bootstrap/bootstrap.less');

  // Font-Awesome
  mix.sass('./node_modules/font-awesome/scss/font-awesome.scss')
    .copy('node_modules/font-awesome/fonts', 'build/fonts');

});

/**
 * Append ".min" to file path in production.
 *
 * @param  {string} path
 * @return {string}
 */
function getMinifyPath(path) {
  return elixir.inProduction ? path.replace(/(\.[^\.]+$)/, '.min$1') : path;
}
