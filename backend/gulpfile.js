var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('combine', function() {
    return gulp.src(['./src/services/**/*.js', './src/**/*.js'])
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['combine']);
