'use strict';

const gulp = require('gulp');
const debug = require('gulp-debug');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const cssmin = require('gulp-cssmin');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

gulp.task('style', function() {
	return gulp.src('dev/**/*.css')
	.pipe(concat('style.main.css'))
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('public/'));
});

gulp.task('script', function() {
	return gulp.src('dev/**/*.js')
	.pipe(concat('script.main.js'))
	.pipe(minify({
		noSource: true,
		ext: {
			min:'.min.js'
		}
	}))
	.pipe(gulp.dest('public/'));
});

gulp.task('default', ['style', 'script']);