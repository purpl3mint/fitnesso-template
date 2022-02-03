const gulp = require('gulp')
const plumber = require('gulp-plumber')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

module.exports = function normalize() {
  return gulp.src('src/styles/normalize/normalize.css')
      .pipe(plumber())
      .pipe(cleanCSS({
          debug: true,
          compatibility: '*'
        }, details => {
          console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
        }))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('build/css'))
}

