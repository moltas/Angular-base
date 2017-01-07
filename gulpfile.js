
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var q = require('q');

gulp.task('scripts', ['clean:js'], function(){
    gulp.src('./app/**/*.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('styles', ['clean:css'], function(){
    gulp.src('./app/home/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
})


gulp.task('watch', function(){
    gulp.watch('app/**/*.scss', ['styles'])
    gulp.watch('app/**/*.js', ['scripts'])

});

gulp.task('clean', function(){
    return gulp.src('dist', {read: false})
        .pipe(clean())
});

gulp.task('clean:css', function(){
   return gulp.src('dist/css', {read: false})
       .pipe(clean())
});

gulp.task('clean:js', function(){
    return gulp.src('dist/js', {read: false})
        .pipe(clean())
});


gulp.task('default', ['scripts', 'styles', 'watch']);
