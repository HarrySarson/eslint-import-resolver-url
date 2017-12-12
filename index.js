const Debug = require('debug')

var log = Debug('eslint-plugin-import:resolver:url')

exports.interfaceVersion = 2

exports.resolve = function(source, file) {
  log('Resolving: ', source, ' from: ', file)

  if (source.match(/^https?:\/\//)) {
    return { found: true, path: null }
  } else {
    log('source is not an URL')
    return { found: false }
  }
}

Object.freeze(exports)