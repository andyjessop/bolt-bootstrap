var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

var paths = {
	scssDir: 	'scss/',
	cssDir: 	'css/'
};

gulp.task('sass', function() {
	gulp.src(paths.scssDir + 'app.scss')
    .pipe(sass())
    .pipe(gulp.dest(paths.cssDir));
});

gulp.task('bootstrap', function() {
	gulp.src(paths.scssDir + 'bootstrap/bootstrap.scss')
    .pipe(sass())
    .pipe(gulp.dest(paths.cssDir));
});