const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')

module.exports = function imageMinify(cb) {
  return gulp.src('src/img/*.{gif,png,jpg,svg,webp}')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(webp())
    .pipe(gulp.dest('build/img'))
}