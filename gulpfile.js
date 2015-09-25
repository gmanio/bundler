'use strict';

var gulp = require('gulp');
var webpack = require("webpack");
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');


// gulp task webpack
gulp.task('webpack', function(done){
    var htConfig = require('./webpack.config.js');

    webpack(htConfig).run(onBuild(done));
});

// gulp task compressed
gulp.task('compress',['webpack'], function() {
    return gulp.src('frontend.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// gulp task clean
gulp.task('clean',['compress'], function(){
    return gulp.src('frontend.js').pipe(clean());
});


gulp.task('default',['webpack','compress','clean'],function(){

    console.log('works well!');
});


function onBuild(done) {
    return function(err, stats) {
        if(err) {
            console.log('Error', err);
        }
        else {
            console.log(stats.toString());
        }

        if(done) {
            done();
        }
    }
}