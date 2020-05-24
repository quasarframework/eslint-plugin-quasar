/**
 * @fileoverview ...desc
 * @author Jeff &lt;jeff@quasar.dev&gt;
 */
"use strict";

const fs = require('fs')
function readModuleFile(path) {
  const filename = require.resolve(path)
  return fs.readFileSync(filename, 'utf8')
}

const q_screen = readModuleFile('../test-files/$q-screen.txt')
const q_actionSheet = readModuleFile('../test-files/$q-actionSheet.txt')

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

let invalid = []
invalid.push({
  code: q_actionSheet,
  errors: [
    {
      message: `'$q.actionSheet' plugin has been replaced with '$q.bottomSheet'`,
      type: 'Identifier'
    }
  ]
})

const rule = require("../../../lib/rules/no-legacy-plugins")
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

ruleTester.run("no-legacy-plugins", rule, {
  valid: [
    q_screen
  ],

  invalid
})
