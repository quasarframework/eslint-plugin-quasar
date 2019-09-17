'use strict'

/* Converts q-btn to QBtn */
function toComponent (str) {
  return str
    .replace(/(?:^|[-_])(\w)/g, c => c.toUpperCase())
    .replace(/[-_]/g, '')
}

function kebabCase (str) {
  return str.replace(
    /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,
    match => '-' + match.toLowerCase()
  ).substring(1)
}

function getQuasarVersion () {
  let quasarFound = false
  let quasarVersion = '1.1.0'
  try {
    const { version } = require('quasar/package.json')
    // console.log('version:', version)
    quasarFound = true
    quasarVersion = version
  } catch (e) {}

  return { quasarFound, quasarVersion }
}

function getQuasarJsonApi (name) {
  const { quasarFound } = getQuasarVersion()
  let api
  try {
    if (quasarFound) {
      api = require(`quasar/dist/api/${name}`)
    } else {
      api = require(`../../tests/lib/dist/api/${name}`)
    }
  } catch (e) {}
  return api
}

module.exports = {
  toComponent,
  kebabCase,
  getQuasarVersion,
  getQuasarJsonApi
}
