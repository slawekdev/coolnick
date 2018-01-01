'use strict';
var gulp = require('gulp');
var pump = require('pump');
var sass = require('gulp-sass');
var ugllify = require('gulp-uglify');

gulp.task('sass', function (cb) {
    pump([
            gulp.src('src/sass/**/*.scss'),
            (sass().on('error', sass.logError)),
            (gulp.dest('dist/css'))
        ],
        cb
    );
});

gulp.task('uglify', function () {
    gulp.src('src/');
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});