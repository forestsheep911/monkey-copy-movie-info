const pj = require('../package.json')
const { resolve } = require('path')
module.exports = {
  name: pj.name,
  namespace: pj.name,
  match: ['https://movie.douban.com/subject/*', 'http://localhost:8080'],
  grant: ['GM_getValue', 'GM_setValue', 'GM_addValueChangeListener', 'GM_addStyle'],
  require: [`file://${resolve(__dirname, '../dist/dev').replaceAll('\\', '/')}/${pj.name}.script.js`],
}
