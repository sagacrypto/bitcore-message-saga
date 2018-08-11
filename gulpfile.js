'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-saga');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
