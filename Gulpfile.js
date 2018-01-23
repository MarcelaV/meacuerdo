var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
	gulp
		.src('index.scss')
		.pipe(sass())
		// .pipe(rename('platziGram.css'))
		.pipe(gulp.dest('public'));
})

gulp.task('default', ['styles']);