/**
 * @fileoverview QField should not be used to wrap QInput or QSelect
 * @author Jeff Galbraith <jeff@quasar.dev>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: "QField should not be used to wrap QInput, QSelect or QFile",
      category: "current",
      url: "", // url to docs
      recommended: true
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
    messages: {
      error: `'q-field' should not be used to wrap '{{ a }}'`
    }
  },

  create: function(context) {

    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section
    const qfield = 'q-field'
    const components = ['q-input', 'q-select', 'q-file'] // no wrap components

    function iterateChildren (element) {
      if (element.children) {
        for(let index = 0; index < element.children.length; ++index) {
          let elm = element.children[index]
          if (elm.type === 'VElement') {
            if (components.includes(elm.rawName)) {
              return elm.rawName
            }
            let val = iterateChildren(elm)
            if (val) {
              return val
            }
          }
        }
      }
      return false
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return context.parserServices.defineTemplateBodyVisitor({
      VElement (element) {

        if (qfield === element.rawName) {
          let val = iterateChildren(element)
          if (val) {
            return context.report({
              messageId: 'error',
              data: {
                a: val
              },
              node: element
            })
          }
        }
      }
    })
  }
}
