/**
 * @fileoverview no legacy properties
 * @author Jeff <jeff@quasar.dev>
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { components } = require('../../../lib/utils/quasar-components.js')
// components that may have legacy props
const legacyProps = components.filter(c => c.legacy !== void 0 && c.legacy.props !== void 0 && c.legacy.props.length > 0)

let invalid = []
legacyProps.filter(c => {
  invalid.push({
    code: `<template><${c.tag + ' ' + c.legacy.props.join(' ')}></${c.tag}></template>`,
    errors: [ ...c.legacy.props.forEach(p => {
      return {
        message: `'${p}' property has been removed`,
        type: 'VIdentifier'
      }
    })]
  })
})


const rule = require("../../../lib/rules/no-legacy-properties")

const RuleTester = require('eslint').RuleTester
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

ruleTester.run("no-legacy-properties", rule, {

  valid: [
    '<template><q-avatar color="red" text-color="white" icon="directions" /></template>'
  ],
  invalid: invalid

})
