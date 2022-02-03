const gulp = require('gulp')

module.exports = function favicon(cb) {
  return gulp.src('src/favicon/*.ico')
    .pipe(gulp.dest('build'))
}