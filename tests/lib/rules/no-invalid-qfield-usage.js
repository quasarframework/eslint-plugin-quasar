/**
 * @fileoverview QField should not be used to wrap QInput or QSelect
 * @author Jeff Galbraith <jeff@quasar.dev>
 */
"use strict";

// const fs = require('fs')
// function readModuleFile(path) {
//   const filename = require.resolve(path)
//   return fs.readFileSync(filename, 'utf8')
// }

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-invalid-qfield-usage")

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

ruleTester.run("no-invalid-qfield-usage", rule, {

  valid: [
    '<template><q-field label="Standard" stack-label><template v-slot:control><div class="self-center full-width no-outline" tabindex="0">Field content</div></template></q-field></template>',
  ],

  invalid: [
    {
      code: '<template><q-field label="Standard" stack-label><q-select></q-select></q-field></template>',
      errors: [{
        message: '\'q-field\' should not be used to wrap \'q-select\'',
        type: "VElement"
      }]
    },
    {
      code: '<template><q-field label="Standard" stack-label><q-input></q-input></q-field></template>',
      errors: [{
        message: '\'q-field\' should not be used to wrap \'q-input\'',
        type: "VElement"
      }]
    }
  ]
})
