/**
 * @fileoverview No legacy components allowed in v1+ code
 * @author Jeff <jeff@quasar.dev>
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { kebabCase } = require('../../../lib/utils/helpers.js')
const { components } = require('../../../lib/utils/quasar-components.js')
const legacyComponents = components.filter(c => c.replacedWith !== void 0)
const safeComponents = components.filter(c => c.replacedWith === void 0)

let valid = []
safeComponents.filter(c => {
  valid.push(`<template><${c.tag}></${c.tag}></template>`)
})

let invalid = []
legacyComponents.filter(c => {
  invalid.push({
    code: `<template><${c.tag}></${c.tag}></template>`,
    errors: [c.replacedWith.length > 0 ? {
      message: `'${c.tag}' has been replaced with '${kebabCase(String(c.replacedWith)).replace(/-q/g, ' q')}'`,
      type: 'VElement'
    } : {
      message: `'${c.tag}' has been removed`,
      type: 'VElement'
    }]
  })
})

const rule = require('../../../lib/rules/no-legacy-components.js')

const RuleTester = require('eslint').RuleTester
const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  }
})

// RuleTester.setDefaultConfig({
//   parserOptions: {
//     ecmaVersion: 6,
//     ecmaFeatures: {
//       jsx: true
//     }
//   }
// })

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

// var ruleTester = new RuleTester();
ruleTester.run(  'no-legacy-components  ', rule, {
  valid: valid,
  invalid: invalid,
})
