/**
 * @fileoverview Checks correct usage of component properties
 * @author Jeff Galbraith <jeff@quasar.dev>
 */
"use strict";

// const fs = require('fs')
// require.extensions['.txt'] = function (module, filename) {
//   module.exports = fs.readFileSync(filename, 'utf8');
// }

const fs = require('fs')
function readModuleFile(path) {
  const filename = require.resolve(path)
  return fs.readFileSync(filename, 'utf8')
}

const qcard1 = readModuleFile('../test-files/q-card-1.txt')
const qexpansionItem1 = readModuleFile('../test-files/q-expansion-item-1.txt')

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/check-valid-props")

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

ruleTester.run("check-valid-props", rule, {

  valid: [
    '<template><q-btn flat color=\"primary\" :label=\"Flat\" @click=\"onClick\" /></template>',
    '<template><q-btn class=\"glossy\" round color=\"deep-orange\" icon=\"local_activity\" /></template>',
    '<template><q-btn dense color=\"primary\" :size=\"size\" :label=\"`Size xl`\" /></template>',
    '<template><q-btn type=\"submit\" :loading=\"submitting\" label=\"Save\" class=\"q-mt-md\" color=\"teal\"><template v-slot:loading><q-spinner-facebook /></template></q-btn></template>',
    '<template><q-popup-proxy transition-show="scale"></q-popup-proxy></template>',
    qexpansionItem1,
    qcard1
  ],

  invalid: [
    {
      code: '<template><q-btn flat color="primary" label="Flat" boo-boo /></template>',
      errors: [{
        message: '\'boo-boo\' is not a property of \'QBtn\'',
        type: 'VIdentifier'
      }]
    },
    {
      code: "<template><q-btn class=\"glossy\" round color=\"deep-orange\" icon=\"local_activity\" bad-prop=\"nothing\" /></template>",
      errors: [{
        message: '\'bad-prop\' is not a property of \'QBtn\'',
        type: 'VIdentifier'
      }]
    },
    {
      code: "<template><q-btn dense color=\"primary\" :size=\"size\" :label=\"`Size xl`\" :invalid-prop=\"invalid\" /></template>",
      errors: [{
        message: '\'invalid-prop\' is not a property of \'QBtn\'',
        type: 'VDirectiveKey'
      }]
    },
    {
      code: '<template><q-btn type=\"submit\" :loading=\"submitting\" label=\"Save\" class=\"q-mt-md\" color=\"teal\" :wrong=\"wrong\"><template v-slot:loading><q-spinner-facebook /></template></q-btn></template>',
      errors: [{
        message: '\'wrong\' is not a property of \'QBtn\'',
        type: 'VDirectiveKey'
      }]
    }
  ]
})
