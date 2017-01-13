const gulp = require("gulp")

// Plugins sass imagemin
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

// Converting scss to css
gulp.task('sass', () => {
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css/'))
})

// Imagemin to compress images
gulp.task('imagemin', () =>
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
);

// Watch task
gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', ['sass']);
});

// Clean, deletes dist folder
gulp.task('clean-dist', function() {
  console.log('Cleaning dist folder');
  return del('dist/');
});


// Default when running $ gulp
gulp.task('default', ['sass', 'watch']);
gulp.task('clean', ['clean-dist']);
