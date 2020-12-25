const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const del = require('del');

gulp.task('clean', function () {
    return del([
        'build/*css', 'dist/*css'
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
        .pipe(gulp.dest('./dist'))
});

// gulp default (clean, sass, minify-css) method
gulp.task('default', gulp.series(['clean', 'sass', 'minify']));

gulp.task('watch', function () {
    gulp.series(['clean', 'sass', 'minify'])
    gulp.watch("src/*.scss").on('change', gulp.series(['clean', 'sass']));
    gulp.watch("build/*.css").on('change', gulp.series('minify'));
})
