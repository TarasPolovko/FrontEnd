var gulp 		 = require('gulp'),
	sass 		 = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	concat 		 = require('gulp-concat'),
	uglify		 = require('gulp-uglify'),
	cssnano		 = require('gulp-cssnano'),
	rename 		 = require('gulp-rename'),
	del 		 = require('del'),
	imagemin	 = require('gulp-imagemin'),
	pngquant	 = require('imagemin-pngquant'),
	cache 		 = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.+(sass|scss)')
	.pipe(sass())
	.pipe(autoprefixer(
		[
		'last 15 versions',
		'> 1%',
		'ie 8',
		'ie 7'
		],
		{
			cascade: true
		}
	))
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('css-libs', ['sass'], function() {
	return gulp.src('src/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(gulp.dest('src/css'));
});

gulp.task('scripts', function() {
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js'
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('src/js'));
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "src"
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
	gulp.watch('src/sass/**/*.+(sass|scss)',['sass']);
	gulp.watch('src/**/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('clear', function() {
	return cache.clearAll();
});

gulp.task('img', function() {
	return gulp.src('src/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{
			removeViewBox: false
		}],
		use: [pngquant()] 
	})))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['clean', 'img', 'css-libs', 'scripts'], function() {
	var buildCss = gulp.src([
		'!src/css/libs.css',
		'src/css/**/*.css'
	])
	.pipe(gulp.dest('dist/css'));
	var buildFonts = gulp.src('src/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));
	var buildJs = gulp.src('src/js/**/*')
	.pipe(gulp.dest('dist/js'))
	var buildHtml = gulp.src('src/*.html')
	.pipe(gulp.dest('dist')); 
});