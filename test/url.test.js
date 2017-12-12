const expect = require('chai').expect

const urlResolve = require('../index.js')

describe('URLs', () => {
  it('returns found but null path for all urls', () => {
    const urls = [
      'https://bbc.co.uk',
      'http://bbc.co.uk',
      'https://unpkg.com/eslint-plugin-import@2.8.0/lib/index.js',
      ]

    for (const url of urls) {
      const resolved = urlResolve.resolve(url, './test/file.js')

      expect(resolved).to.have.property('found', true)
      expect(resolved).to.have.property('path', null)
    }
  })

  it('does not find any non urls', () => {
    const nonUrls = ['path', 'fs', './file.js']

    for (const nonUrl of nonUrls) {
      const resolved = urlResolve.resolve(nonUrl, './test/file.js')

      expect(resolved).to.have.property('found', false)
    }
  })
})