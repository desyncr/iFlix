var gulp = require('gulp');
var browserify = require('gulp-browserify');
var react = require('gulp-react');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var sass = require('gulp-sass')


var path = {
    html: 'src/**/*.html',
    sass: 'src/assets/less/dna.scss',
    img: 'src/assets/img/**/*.*',
    dna: 'src/assets/js/dna.jsx'
}

var config = {
    dist: '/dist'
}

gulp.task('html', function () {
    gulp.src(path.html)
        .pipe(gulp.dest(__dirname + config.dist))
        .pipe(connect.reload());
});

gulp.task('sass', function () {
    gulp.src(path.sass)
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest(__dirname + config.dist))
        .pipe(connect.reload());
});

gulp.task('dna', function () {
    gulp.src(path.dna, { read: false })
        .pipe(browserify({
                debug: true,
                insertGlobals: true,
                shim: {
                    'jQuery': {
                        path: './vendor/jquery/jquery-2.1.1.min.js',
                        exports: '$'
                    },
                    'bootstrap': {
                        path: './vendor/bootstrap/bootstrap.min.js',
                        exports: 'bootstrap',
                        depends: {
                            'jQuery': '$'
                        }
                    }
                }
            }
        ))
        .pipe(react())
        .pipe(uglify())
        .pipe(gulp.dest(__dirname + config.dist))
        .pipe(connect.reload());
});

gulp.task('img', function (cb) {
    gulp.src(path.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('dist/img'))
        .pipe(connect.reload()).on('end', cb).on('error', cb);;
});

gulp.task('connect', function () {
    connect.server({
        root: [__dirname + config.dist],
        livereload: false,
        port: 5445
    });
});

gulp.task('watch', function () {
    gulp.watch(path.html, ['html']);
    gulp.watch(path.sass, ['sass']);
    gulp.watch(path.dna, ['dna']);
    gulp.watch(path.img, ['img']);
});

gulp.task('test', ['html', 'sass', 'dna', 'img']);
gulp.task('default', ['connect', 'html', 'sass', 'dna', 'img', 'watch']);
