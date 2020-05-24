/**
 * @fileoverview No legacy css classes allowed in v1+ code
 * @author Jeff <jeff@quasar.dev>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: "disallow use of legacy css classes that have been removed from Quasar v1.x",
      category: "legacy",
      url: "", // urls to docs
      recommended: false
    },
    fixable: 'code',  // null or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
    messages: {
      replacedWith: `'{{ a }}' css class has been replaced with '{{ b }}'`,
      removed: `'{{ name }}' css class has been removed`
    }
  },

  create (context) {

    // variables should be defined here
    const { css } = require('../utils/quasar-css.js')
    const legacyCss = css.filter(c => c.replacedWith !== void 0)
    const legacyArray = []
    legacyCss.forEach(c => {
      legacyArray.push(c.tag)
    })

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    function getObject (name) {
      return legacyCss.find(c => c.name === name)
    }

    function findLegacyCss (classes) {
      for (let index = 0; index < classes.length; ++index) {
        let value = getObject(classes[0])
        if (value) {
          return value
        }
      }
    }

    /**
     * Finds legacy classes based on passed in classes and
     * replaces them in a new array
     * @param {Array} the origial array of classes from the attribute
     * @returns new array with original classes unless they were changed
     */
    function replaceClasses (classes) {
      let found = []
      classes.forEach(c => {
        let wasFound = false
        legacyCss.forEach(l => {
          if (c === l.name) {
            wasFound = true
            if (Array.isArray(l.replacedWith)) {
              // just use the first one
              found.push(l.replacedWith[0])
            } else {
              found.push(l.replacedWith)
            }
          }
        })
        if (wasFound === false) {
          found.push(c)
        }
      })
      return found
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    const options = context.options[0] || {}

    return context.parserServices.defineTemplateBodyVisitor({
      VAttribute (node) {
        if (node.key.name === 'class') {
          // this is the value of the attribute
          // for attribute "class", this is a string
          // of space separated css classes
          const value = node.value.value

          // there may be more than one class separated by spaces
          const classes = value.split(' ')

          // try to find what we are looking for
          let found = findLegacyCss(classes)

          // nothing found?
          if (found === void 0 || found.length === 0) {
            return
          }

          // more than one might be found, just deal with the first one
          // eslint docs says:
          // "After applying fixes, ESLint will run all of the enabled
          // rules again on the fixed code, potentially applying more fixes.
          // This process will repeat up to 10 times"
          let c = found

          return context.report({
            messageId: c.replacedWith.length > 0 ? 'replacedWith' : 'removed',
            data: c.replacedWith.length > 0 ? {
              a: c.name,
              b: c.replacedWith
            } : {
              name: value
            },
            // return the Literal (Node)
            node: node.value,

            // these rules can be fixed
            // items in "quasar-css" that have "replacedWith"
            // as empty string still works
            fix (fixer) {
              const replacement = value.replace(c.name, c.replacedWith)

              // replace the original string, including "class"
              return fixer.replaceText(node, `class="${replacement}"`)
            }
          })

        }
      }
    })
  }
}
