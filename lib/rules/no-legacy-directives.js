/**
 * @fileoverview ...desc
 * @author Jeff <jeff@quasar.dev>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "disallow use of legacy directives that have been removed from Quasar",
      category: "legacy",
      recommended: false
    },
    fixable: 'code',  // null or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
    messages: {
      replacedWith: `'{{ a }}' directive has been replaced with '{{ b }}'`,
      removed: `'{{ tag }}' directive has been removed`
    }
  },

  create: function(context) {

    // variables should be defined here
    const { directives } = require('../utils/quasar-directives.js')
    const legacyDirectives = directives.filter(c => c.replacedWith !== void 0)
    let legacyArray = []
    legacyDirectives.forEach(d => {
      legacyArray.push(d.tag)
    })

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    function getObject (tag) {
      return legacyDirectives.find(d => d.tag === tag)
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    const options = context.options[0] || {}

    return context.parserServices.defineTemplateBodyVisitor({
      VDirectiveKey (node) {
        if (!legacyArray.includes(node.name.name)) {
          return
        }

        let directive = node.name.name

        // get directive object
        let o = getObject(directive)

        // check validness
        if (o !== void 0) {
          return context.report({
            messageId: o.replacedWith.length > 0 ? 'replacedWith' : 'removed',
            data: o.replacedWith.length > 0 ? {
              a: o.tag,
              b: o.replacedWith
            } : {
              tag: o.tag
            },
            // return the JSXAttribute (Node)
            node: node,
            fix (fixer) {
              if (o.replacedWith.length > 0) {
                // replace the original string
                return fixer.replaceText(node, o.replacedWith)
              }
            }
          })
        }
      }
    })

    // return {
    //   JSXAttribute (node) {
    //     if (node.name.name === void 0) {
    //       // not the droids we're looking for...
    //       return
    //     }

    //     // this will be the attribute name
    //     const nodeType = node.name.name

    //     if (legacyArray.includes(nodeType) === false) {
    //       // not the droids we're looking for...
    //       return
    //     }

    //     let c = findLegacyCss(nodeType)

    //     return context.report({
    //       messageId: c.replacedWith.length > 0 ? 'replacedWith' : 'removed',
    //       data: c.replacedWith.length > 0 ? {
    //         a: c.name,
    //         b: c.replacedWith
    //       } : {
    //         name: c.name
    //       },
    //       // return the JSXAttribute (Node)
    //       node: node,
    //       fix (fixer) {
    //         if (c.replacedWith.length > 0) {
    //           // replace the original string
    //           return fixer.replaceText(node, c.replacedWith)
    //         }
    //       }
    //     })
    //   }
    // }
  }
}
