/**
 * @fileoverview No legacy css classes allowed in v1+ code
 * @author Jeff <jeff@quasar.dev>
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { css } = require('../../../lib/utils/quasar-css.js')
const legacyCss = css.filter(c => c.replacedWith !== void 0)

let invalid = []
invalid.push({
  code: '<template><div class="tertiary q-display-3 q-headline quote capitalize mat-only gutter-md"></div></template>',
  errors: [
    {
      message: `'tertiary' css class has been replaced with 'accent'`,
      type: 'VLiteral'
    }
  ]
})

legacyCss.filter(c => {
  invalid.push({
    code: `<template><div class="${c.name}"></div></template>`,
    errors: [c.replacedWith.length > 0 ? {
      message: `'${c.name}' css class has been replaced with '${c.replacedWith}'`,
      type: 'VLiteral'
    } : {
      message: `'${c.name}' css class has been removed`,
      type: 'VLiteral'
    }]
  })
})

const rule = require("../../../lib/rules/no-legacy-css.js")
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
ruleTester.run("no-legacy-css", rule, {

  valid: [
    '<template><div class="text-red-4"></div></template>',
    '<template><div class="rounded-borders"></div></template>'
  ],
  invalid: invalid
})
