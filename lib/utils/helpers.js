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

module.exports = {
  toComponent,
  kebabCase
}
