const elixir = require('laravel-elixir');
const gulp = require('gulp');
const del = require('del');
const glob = require('glob');
const path = require('path');
require('laravel-elixir-replace2');

elixir.config.notifications = false;
elixir.config.css.minifier.pluginOptions = {
    compatibility: 'ie7',
    keepSpecialComments: 0
};

elixir((mix) => {

    // AdminLTE
    mix.scripts(
        [
            './admin-lte/AdminLTEOptions.js',
            './node_modules/admin-lte/dist/js/adminlte.js',
            './admin-lte/AdminLTE-custom.js'
        ],
        destPath('admin-lte/dist/js/admin-lte.js')
    )
    .replace(
        'node_modules/admin-lte/dist/css/AdminLTE.css',
        "url('../img/",
        "url('../img/admin-lte/",
        'tmp/admin-lte.css'
    )
    .styles(
        [
            './tmp/admin-lte.css',
            './node_modules/admin-lte/dist/css/skins/_all-skins.css',
            './admin-lte/AdminLTE-custom.css'
        ],
        destPath('admin-lte/dist/css/admin-lte.css')
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
    )
    .sass(
        './bootstrap/bootstrap-custom.scss',
        destPath('bootstrap/dist/css/bootstrap.css')
    )
    .scripts(
        './node_modules/bootstrap/dist/js/bootstrap.js',
        destPath('bootstrap/dist/js/bootstrap.js')
    );

    // DataTables
    mix.scripts(
        [
            './node_modules/datatables.net/js/jquery.dataTables.js',
            './node_modules/datatables.net-bs/js/dataTables.bootstrap.js',
            './node_modules/datatables.net-responsive/js/dataTables.responsive.js',
            './node_modules/datatables.net-responsive-bs/js/responsive.bootstrap.js',
            './datatables/datatables-defaults.js',
            './datatables/datatables-helper.js'
        ],
        destPath('datatables/dist/js/datatables-bootstrap.js')
    )
    .styles(
        [
            './node_modules/datatables.net-bs/css/dataTables.bootstrap.css',
            './datatables/datatables-FontAwesome.css',
            './node_modules/datatables.net-responsive-bs/css/responsive.bootstrap.css'
        ],
        destPath('datatables/dist/css/datatables-bootstrap.css')
    )
    .scripts(
        [
            './node_modules/datatables.net-buttons/js/dataTables.buttons.js',
            './node_modules/datatables.net-buttons-bs/js/buttons.bootstrap.js'
        ],
        destPath('datatables/dist/js/datatables-buttons-bs.js')
    )
    .styles(
        './node_modules/datatables.net-buttons-bs/css/buttons.bootstrap.css',
        destPath('datatables/dist/css/datatables-buttons-bs.css')
    )
    .scripts(
        './node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.js',
        destPath('datatables/dist/js/datatables-fixedheader.js')
    )
    .styles(
        './node_modules/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.css',
        destPath('datatables/dist/css/datatables-fixedheader-bs.css')
    );

    // FastClick
    mix.scripts(
        [
            './node_modules/fastclick/lib/fastclick.js',
            './fastclick/attach.js'
        ],
        destPath('fastclick/dist/fastclick.js')
    );

    // Font-Awesome
    mix.styles(
        './node_modules/font-awesome/css/font-awesome.css',
        destPath('font-awesome/dist/css/font-awesome.css')
    )
    .copy(
        'node_modules/font-awesome/fonts',
        'font-awesome/dist/fonts'
    );

    // GitHub Markdown
    mix.styles(
        './node_modules/github-markdown-css/github-markdown.css',
        destPath('github-markdown-css/dist/github-markdown.css')
    )
    .styles(
        [
            './node_modules/github-markdown-css/github-markdown.css',
            './github-markdown-css/container.css'
        ],
        destPath('github-markdown-css/dist/github-markdown-container.css')
    );

    // Highlight.js
    mix.copy('highlight/highlight.pack.js', 'highlight/dist/js');

    [
        'atom-one-dark', 'atom-one-light',
        'github', 'github-gist',
        'tomorrow','tomorrow-night',
        'ocean', 'solarized-dark'
    ].forEach(function (name) {
        mix.styles(
            './highlight/styles/' + name + '.css',
            destPath('highlight/dist/css/highlight-' + name + '.css')
        );
    });

    // iCheck
    glob.sync('node_modules/icheck/skins/*/*.css').forEach(function (file) {
        var skinPath = file.replace('node_modules/icheck/skins/', ''); // "flat/_all.css"
        var skin = path.dirname(skinPath); // "flat"
        var filename = skinPath.replace('_', '').replace(path.sep, '-'); // "flat-all.css"

        mix.replace(
            file,
            /(url\()(.+\.png\))/g,
            '$1../img/icheck/' + skin + '/$2',
            'tmp/icheck/css/' + filename
        )
        .styles(
            './tmp/icheck/css/' + filename,
            destPath('icheck/dist/css/icheck-' + filename)
        )
        .copy(
            'node_modules/icheck/skins/' + skin + '/*.png',
            'icheck/dist/img/icheck/' + skin
        );
    });

    mix.styles(
        [
            './tmp/icheck/css/flat-all.css',
            './tmp/icheck/css/futurico-futurico.css',
            './tmp/icheck/css/line-all.css',
            './tmp/icheck/css/minimal-all.css',
            './tmp/icheck/css/polaris-polaris.css',
            './tmp/icheck/css/square-all.css'
        ],
        destPath('icheck/dist/css/icheck-all-skins.css')
    )
    .scripts(
        './node_modules/icheck/icheck.js',
        destPath('icheck/dist/js/icheck.js')
    );

    // lightbox2
    mix.scripts(
        [
            './node_modules/lightbox2/src/js/lightbox.js',
            './lightbox2/lightbox-defaults.js'
        ],
        destPath('lightbox2/dist/js/lightbox2.js')
    )
    .replace(
        'node_modules/lightbox2/src/css/lightbox.css',
        '../images/',
        '../img/lightbox2/',
        'tmp/lightbox2.css'
    )
    .styles(
        './tmp/lightbox2.css',
        destPath('lightbox2/dist/css/lightbox2.css')
    )
    .copy(
        'node_modules/lightbox2/dist/images',
        'lightbox2/dist/img/lightbox2'
    );

    // Polyfill
    mix.scripts(
        [
            './node_modules/html5shiv/dist/html5shiv.js',
            './node_modules/respond.js/dest/respond.src.js'
        ],
        destPath('polyfill/dist/ie-html5shiv-respond.js')
    );

    // SweetAlert2
    mix.scripts(
        [
            './node_modules/sweetalert2/dist/sweetalert2.js',
            './sweetalert2/SweetAlert2.defaults.js',
            './sweetalert2/swalApi.js'
        ],
        destPath('sweetalert2/dist/js/sweetalert2.js')
    )
    .styles(
        './node_modules/sweetalert2/dist/sweetalert2.css',
        destPath('sweetalert2/dist/css/sweetalert2.css')
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
