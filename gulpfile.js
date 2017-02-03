'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csso = require('gulp-csso');
var rename = require("gulp-rename");
var imagemin = require('gulp-imagemin');
 
gulp.task('sass', function () {
  return gulp.src('scss/style.scss')

    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))


    .pipe(gulp.dest('css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css'));
});

 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});


gulp.task('images', function () {
	return gulp.src('img/**/*.{png,jpg,gif}')

	.pipe(imagemin([
		imagemin.optipng({optimizationLevel: 3}), 
		imagemin.jpegtran({progressive: true})
		]))

	.pipe(gulp.dest('img'));
});