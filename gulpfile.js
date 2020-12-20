const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const del = require('del');

gulp.task('clean', function () {
    return del([
        'build/*css', 'build/dist/*css'
    ]);
});

gulp.task('sass', function () {
    // sass directory
    return gulp.src('./src/*.scss')
        .pipe(sass())
        //outputstyle (nested, compact, expanded, compressed)
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        // css output directory
        .pipe(gulp.dest('./build'))
    // watch file
    //gulp.watch('./src/*.scss', ['sass']);
});

// minify css (merge + autoprefix + rename)
gulp.task('minify', function () {
    return gulp.src('./build/*.css')
        .pipe(minifyCss())
        // minify css rename
        .pipe(rename(function (path) {
            path.extname = ".min.css";
        }))
        // minify css output directory
        .pipe(gulp.dest('./build/dist'))
});


// sass/css browser tracking
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

// gulp default (clean, sass, minify-css) method
gulp.task('default', gulp.series(['clean', 'sass', 'minify']));
gulp.task('serve', gulp.series('browser-sync'));
gulp.task('watch', function () {
    //gulp.watch('./src/*.scss').on('change','sass');
    //gulp.watch('./build/*.css').on('change','minify-css');
    // Other watchers
    gulp.series(['clean', 'sass', 'minify'])
    gulp.watch("src/*.scss").on('change', gulp.series(['clean', 'sass']));
    gulp.watch("build/*.css").on('change', gulp.series('minify'));
    gulp.watch('./*.html').on('change', browserSync.reload);
})
