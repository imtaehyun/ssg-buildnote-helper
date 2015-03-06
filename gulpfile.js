var gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('serve', function() {
	browserSync({
		server: {
			baseDir: './app'
		}
	});

	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch(['app/js/*.js', 'app/css/*.css'], browserSync.reload);
});

gulp.task('default', ['serve']);