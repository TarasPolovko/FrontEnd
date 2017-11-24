'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

gulp.task('scss', function() {
	return gulp.src('dev/styles/main.scss')
	.pipe(sass.sync().on('error', sass.logError))
	.pipe(gulp.dest('public/styles'));
});

gulp.task('watch', function() {
	return watch('dev/**/*.scss', function() {
		gulp.start('scss');
		console.log('The files have been changed');
	});	 
});