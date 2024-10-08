const pj = require('../package.json')
module.exports = {
  name: pj.name,
  namespace: pj.homepage,
  version: pj.version,
  description: pj.description,
  author: pj.author,
  copyright: pj.author,
  license: pj.license,
  match: ['https://movie.douban.com/subject/*'],
  require: [],
  'run-at': 'document-idle',
  supportURL: pj.bugs.url,
  homepage: pj.homepage,
  grant: [],
  icon: 'https://img.icons8.com/ios/50/000000/happy-eyes.png',
}
