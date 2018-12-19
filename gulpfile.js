let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass');

gulp.task('sass', function () {
    var stream = gulp.src('./puclic/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css/'))
        .pipe(rename('main.css'));
    return stream;
});

gulp.task('styles', callback => {
  sequence('sass')(callback)
});

gulp.task('watch', ['styles'], () => {
  browserSync.init({
    server: './'
  })
});

gulp.watch('./scss/*.scss', ['styles']);


