const gulp = require('gulp')
const compression = require('compression')
const http2 = require('http2')

const imageMinify = require('./imageMinify')
const styles = require('./styles')
const pug2html = require('./pug2html')
const script = require('./script')

const server = require('browser-sync').create()

module.exports = function serve(cb) {
    server.init({
        server: {
            baseDir: 'build',
            middleware: function(req,res,next){
                let gzip = compression();
                gzip(req,res,next);
            }
        },
        httpModule: http2,
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch('src/img/*/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify)).on('change', server.reload)
    gulp.watch('src/styles/**/*.scss', gulp.series(styles)).on('change', server.reload)
    gulp.watch('src/js/**/*.js', gulp.series(script)).on('change', server.reload)
    gulp.watch('src/pages/**/*.pug', gulp.series(pug2html)).on('change', server.reload)
    gulp.watch('build/*.html').on('change', server.reload)

    return cb()
}