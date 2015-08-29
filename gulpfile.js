var gulp 	= require('gulp'),
jade 		= require('gulp-jade'),
browserify	= require('browserify'),
source 		= require('vinyl-source-stream'),
stream 		= require('gulp-streamify'),
uglify 		= require('gulp-uglify'),
sass 		= require('gulp-sass'),
connect 	= require('gulp-connect'),
order  		= require('gulp-order'),
html		= require('gulp-minify-html'),
css			= require('gulp-minify-css'),
concat 		= require('gulp-concat'),
plumber		= require('gulp-plumber'),
changed 	= require('gulp-changed'),
del 		= require('del');

/**
 * Settings
 */
 APP = {
 	SRC: './app',
 	DEST: './dist'
 };

 gulp.task('jade', function(){
 	gulp.src([APP.SRC+'/src/jade/*.jade', APP.SRC+'/!src/jade/index.jade'])
 	.pipe(plumber())
 	.pipe(jade())
 	.pipe(gulp.dest(APP.DEST+'/views/'));

 	gulp.src(APP.SRC+'/src/jade/index.jade')
 	.pipe(plumber())
 	.pipe(jade())
 	.pipe(gulp.dest(APP.DEST))
 	.pipe(connect.reload());
 });


 gulp.task('sass', function(){
 	gulp.src(APP.SRC+'/src/sass/main.sass')
 	.pipe(plumber())
 	.pipe(sass())
 	.pipe(gulp.dest(APP.DEST+'/css/'))
 	.pipe(connect.reload());
 });


 gulp.task('watch', function(){
 	gulp.watch(APP.SRC+'/src/jade/**/*.jade', ['jade']);
 	gulp.watch(APP.SRC+'/src/sass/**/*.sass',['sass']);
 });

 gulp.task('connect', function(){
 	connect.server({
 		root: APP.DEST,
 		livereload: true,
 		port:3000
 	});
 });


 gulp.task('copy', function(){

 	/**
 	 * Copy images
 	 */
 	 gulp.src(APP.SRC+'/img/**/*')
 	 .pipe(changed(APP.DEST+'/img/**/*'))
 	 .pipe(gulp.dest(APP.DEST+'/img'));
 	/**
 	 * Copy .JSON data storage files
 	 */
 	 gulp.src(APP.SRC+'/res/**/*')
 	 .pipe(changed(APP.DEST+'/res/**/*'))
 	 .pipe(gulp.dest(APP.DEST+'/res'));
	 /**
	  * Copy vendor JS libraries
	  */
	  gulp.src(APP.SRC+'/lib/**/*')
	  .pipe(changed(APP.DEST+'/lib/**/*'))
	  .pipe(gulp.dest(APP.DEST+'/lib'));

	  /**
	  * Copy vendor CSS libraries
	  */
	  gulp.src(APP.SRC+'/css/**/*')
	  .pipe(changed(APP.DEST+'/css/**/*'))
	  .pipe(gulp.dest(APP.DEST+'/css'));


	  /**
	  * Copy media
	  */
	  gulp.src(APP.SRC+'/media/**/*')
	  .pipe(changed(APP.DEST+'/media/**/*'))
	  .pipe(gulp.dest(APP.DEST+'/media'));

	});


 gulp.task('clear', function(){
 	del([APP.DEST], function (err, paths) {
 		console.log('Deleted files/folders:\n', paths.join('\n'));
 	});
 });


 gulp.task('concat', function(){
 	return gulp.src([
 		APP.SRC+'/lib/jquery-1.11.1.min.js',
 		APP.SRC+'/lib/angular.js',
 		APP.SRC+'/lib/angular-route.min.js',
 		APP.SRC+'/lib/lightbox.min.js',
 		APP.SRC+'/js/**/*'
 		])
 	.pipe(changed(APP.DEST+'/app.js'))
 	.pipe(concat('app.js'))
 	.pipe(gulp.dest(APP.DEST));
 });


 gulp.task('default',['copy','concat', 'jade', 'sass', 'watch', 'connect']);