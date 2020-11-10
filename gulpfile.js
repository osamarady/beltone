// Require Packages
var gulp = require('gulp'),
		pug = require('gulp-pug'),
		sass = require('gulp-sass'),
		uglify = require('gulp-uglify'),
		pump = require('pump'),
		livereload = require('gulp-livereload');
	  imagemin = require('gulp-imagemin');

// Pug js Package
gulp.task('pug', function () {
	return gulp.src('project/*.pug')
		.pipe(pug({
			pretty: false
		}))
		.pipe(gulp.dest('dist/'))
		.pipe(livereload());
});

// Sass Package
gulp.task('sass', function () {
	return gulp.src('project/css/*.sass')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(gulp.dest('dist/css'))
		.pipe(livereload());
});

// Js Compress Package
gulp.task('js-compress', function (cb) {
	pump([
        gulp.src('project/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
		cb
	);
});

// img Compress Package
gulp.task('img-compress', () =>
	gulp.src('dist/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'))
	.pipe(imagemin([
            imagemin.gifsicle({
			interlaced: true
		}),
            imagemin.jpegtran({
			progressive: true
		}),
            imagemin.optipng({
			optimizationLevel: 5
		}),
            imagemin.svgo({
			plugins: [
				{
					removeViewBox: true
				},
				{
					cleanupIDs: false
				}
                ]
		})
        ]))
);

// WATCH TASK
gulp.task('default', function () {
	require("./server.js");
	livereload.listen();
	gulp.watch('project/*.pug', gulp.series('pug'));
	gulp.watch('project/css/*.sass', gulp.series('sass'));
	gulp.watch('project/js/*.js', gulp.series('js-compress'));
	gulp.watch('dist/images/*', gulp.series('img-compress'));
});
