const elixir = require('laravel-elixir');
const gulp = require('gulp');
const del = require('del');
require('laravel-elixir-replace2');

elixir.config.css.minifier.pluginOptions = {
    compatibility: 'ie7',
    keepSpecialComments: 0
};

elixir.config.publicPath = 'build';

elixir((mix) => {

    // AdminLTE
    mix.scripts(
        [
            './admin-lte/AdminLTEOptions.js',
            './node_modules/admin-lte/dist/js/adminlte.js',
            './admin-lte/AdminLTE-custom.js'
        ],
        destPath('admin-lte/dist/js/AdminLTE.js')
    )
    .replace(
        'node_modules/admin-lte/dist/css/AdminLTE.css',
        "url('../img/",
        "url('../img/admin-lte/",
        'tmp/AdminLTE.css'
    )
    .styles(
        [
            './tmp/AdminLTE.css',
            './node_modules/admin-lte/dist/css/skins/_all-skins.css',
            './admin-lte/AdminLTE-custom.css'
        ],
        destPath('admin-lte/dist/css/AdminLTE.css')
    )
    .copy(
        'node_modules/admin-lte/dist/img/boxed-bg.jpg',
        'admin-lte/dist/img/admin-lte'
    );

    // Bootbox
    mix.scripts(
        [
            './node_modules/bootbox/bootbox.js',
            './bootbox/bootbox-fix.js'
        ],
        destPath('bootbox/dist/bootbox.js')
    );

    // Bootnotify
    mix.scripts(
        [
            './node_modules/bootnotify/bootnotify.js',
            './bootnotify/bootnotifyApi.js'
        ],
        destPath('bootnotify/dist/bootnotify-api.js')
    );

    // Bootstrap
    mix.replace(
        'node_modules/bootstrap/less/bootstrap.less',
        '@import "',
        '@import "node_modules/bootstrap/less/',
        'bootstrap'
    )
    .replace(
        'node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss',
        '@import "',
        '@import "node_modules/bootstrap-sass/assets/stylesheets/',
        'bootstrap'
    )
    .replace(
        [
            'bootstrap/bootstrap.less',
            'bootstrap/_bootstrap.scss'
        ],
        /(.+glyphicons.+)/gi,
        '// $1',
        'bootstrap'
    );

    // dataTables
    mix.scripts(
        [
            './node_modules/datatables.net/js/jquery.dataTables.js',
            './node_modules/datatables.net-bs/js/dataTables.bootstrap.js',
            './node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.js',
            './node_modules/datatables.net-responsive/js/dataTables.responsive.js',
            './node_modules/datatables.net-responsive-bs/js/responsive.bootstrap.js',
            './datatables/datatables-defaults.js',
            './datatables/datatables-helper.js',
        ],
        destPath('datatables/dist/js/dataTables-responsive-bs.js')
    )
    .styles(
        [
            './node_modules/datatables.net-bs/css/dataTables.bootstrap.css',
            './node_modules/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.css',
            './node_modules/datatables.net-responsive-bs/css/responsive.bootstrap.css',
            './datatables/datatables-FontAwesome.css'
        ],
        destPath('datatables/dist/css/dataTables-responsive-bs.css')
    );

    // FastClick
    mix.scripts(
        [
            './node_modules/fastclick/lib/fastclick.js',
            './fastclick/attach.js'
        ],
        destPath('fastclick/dist/fastclick.js')
    );

    // iCheck
    var icheckSkins = [
        'flat', 'futurico', 'line', 'minimal', 'polaris', 'square'
    ];

    icheckSkins.forEach(function(skin) {
        mix.replace(
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

    mix.styles(
        [
            './icheck/css/skins/flat/_all.css',
            './icheck/css/skins/futurico/futurico.css',
            './icheck/css/skins/line/_all.css',
            './icheck/css/skins/minimal/_all.css',
            './icheck/css/skins/polaris/polaris.css',
            './icheck/css/skins/square/_all.css'
        ],
        destPath('icheck/css/skins/all.css')
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
        destPath('lightbox2/dist/css/lightbox.css')
    )
    .scripts(
        [
            './node_modules/lightbox2/src/js/lightbox.js',
            './lightbox2/lightbox-defaults.js'
        ],
        destPath('lightbox2/dist/js/lightbox.js')
    )
    .copy(
        'node_modules/lightbox2/dist/images',
        'lightbox2/dist/img/lightbox'
    );

    // SweetAlert2
    mix.scripts(
        [
            './node_modules/sweetalert2/dist/sweetalert2.js',
            './sweetalert2/SweetAlert2.defaults.js',
            './sweetalert2/swalApi.js'
        ],
        destPath('sweetalert2/dist/js/sweetalert2.js')
    );

    // Utilities: ie-compatible
    mix.scripts(
        [
            './node_modules/html5shiv/dist/html5shiv.js',
            './node_modules/respond.js/dest/respond.src.js'
        ],
        destPath('utilities/ie-compatible.js')
    );

});

gulp.task('clean', function() {
    return del([
        './tmp',
        './*/dist'
    ]);
});

/**
 * Append ".min" to file path in production.
 */
function destPath(path) {
    return elixir.inProduction ? path.replace(/(\.[^\.]+$)/, '.min$1') : path;
}
