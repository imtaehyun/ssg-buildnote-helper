var gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('html', function() {
	gulp.src('app/*.html')
		.pipe(gulp.dest('dist/'));
});

gulp.task('js', function() {
	gulp.src('app/js/*.js')
		.pipe(gulp.dest('dist/js/'));
	});

gulp.task('css', function() {
	gulp.src('app/css/*.css')
		.pipe(gulp.dest('dist/css/'));
	});

gulp.task('serve', function() {
	browserSync({
		server: {
			baseDir: './dist'
		},
		open: false
	});

	gulp.watch(['app/*.html'], ['html', browserSync.reload]);
	gulp.watch(['app/js/*.js', 'app/css/*.css'], ['js', 'css', browserSync.reload]);
});

gulp.task('default', ['html', 'js', 'css', 'serve']);