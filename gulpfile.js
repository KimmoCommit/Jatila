var gulp 	= require('gulp'),
jade 		= require('gulp-jade'),
browserify	= require('browserify'),
source 		= require('vinyl-source-stream'),
stream 		= require('gulp-streamify'),
uglify 		= require('gulp-uglify'),
sass 		= require('gulp-ruby-sass'),
connect 	= require('gulp-connect'),
order  		= require('gulp-order'),
html		= require('gulp-minify-html'),
css			= require('gulp-minify-css'),
concat 		= require('gulp-concat'),
plumber		= require('gulp-plumber');



gulp.task('jade', function(){
	gulp.src(['src/jade/*.jade', '!src/jade/index.jade'])
	.pipe(plumber())
	.pipe(jade())
	.pipe(gulp.dest('views/'));

	gulp.src('src/jade/index.jade')
	.pipe(plumber())
	.pipe(jade())
	.pipe(gulp.dest(''))
	.pipe(connect.reload());
});


gulp.task('sass', function(){
	gulp.src('src/sass/main.sass')
	.pipe(plumber())
	.pipe(sass())
	.pipe(gulp.dest(''))
	.pipe(connect.reload());
});


gulp.task('watch', function(){
	gulp.watch('src/jade/**/*.jade', ['jade']);
	gulp.watch('src/sass/**/*.sass',['sass']);
});

gulp.task('connect', function(){
	connect.server({
		root: '',
		livereload: true,
		port:3000
	});
});

gulp.task('default',['jade', 'sass', 'watch', 'connect']);