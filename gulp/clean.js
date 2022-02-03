const del = require('del')

function cleanBuild() {
    return del('build')
}

function cleanReport() {
    return del('reports')
}

module.exports = {
    cleanBuild,
    cleanReport
}