const gulp = require('gulp')
const critical = require('critical')

module.exports = function criticalGen (cb) {
  return critical.generate({
    inline: true,
    base: './build/',
    src: 'index.html',
    target: {
      html: './index-critical.html',
      css: './css/critical.css',
      uncritical: './css/uncritical.css'
    },
    width: 1920,
    height: 700
  })
}