/**
 * @fileoverview ...desc
 * @author Jeff &lt;jeff@quasar.dev&gt;
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { directives } = require('../../../lib/utils/quasar-directives.js')
const legacyDirectives = directives.filter(d => d.replacedWith !== void 0)
const safeDirectives = directives.filter(d => d.replacedWith === void 0)

let valid = []
safeDirectives.filter(d => {
  valid.push(`<template><div v-${d.name}></div></template>`)
})

let invalid = []
legacyDirectives.filter(d => {
  invalid.push({
    code: `<template><div v-${d.name}></div></template>`,
    errors: [d.replacedWith.length > 0 ? {
      message: `'${d.name}' directive has been replaced with '${d.replacedWith}'`,
      type: 'VDirectiveKey'
    } : {
      message: `'${d.name}' directive has been removed`,
      type: 'VDirectiveKey'
    }]
  })
})

const rule = require("../../../lib/rules/no-legacy-directives")
const RuleTester = require("eslint").RuleTester
const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  }
})


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

// var ruleTester = new RuleTester();
ruleTester.run("no-legacy-directives", rule, {

  valid: valid,
  invalid: invalid

})