const rules = require('../rules')
module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    es2021: true
  },
  rules: Object.fromEntries(Object.keys(rules).map(r => [`custom-elements/${r}`, 'error']))
}
