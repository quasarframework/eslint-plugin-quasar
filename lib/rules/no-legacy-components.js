/**
 * @fileoverview No legacy components allowed in v1+ code
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
      description: "disallow use of legacy components that have been removed from Quasar v1.x",
      category: "legacy",
      url: "", // url to docs
      recommended: false
    },
    fixable: null,  // null or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
    messages: {
      replacedWith: `'{{ a }}' has been replaced with '{{ b }}'`,
      removed: `'{{ name }}' has been removed`,
      message: '{{ message }}'
    }
  },

  create: function(context) {

    const { toComponent, kebabCase } = require('../utils/helpers.js')
    const { components } = require('../utils/quasar-components.js')
    const legacyComponents = components.filter(c => c.replacedWith !== void 0)
    const legacyArray = []
    legacyComponents.forEach(c => {
      legacyArray.push(c.tag)
    })

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    function getObject (tag) {
      return legacyComponents.find(c => c.tag === tag)
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return context.parserServices.defineTemplateBodyVisitor({
      VElement (element) {
        // console.log(element.rawName)
        if (!legacyArray.includes(element.rawName)) {
          return
        }

        // get component object
        let o = getObject(element.rawName)

        // check validness
        if (o !== void 0) {

          // return the context report
          return context.report({
            messageId: o.message ? 'message' : o.replacedWith.length > 0 ? 'replacedWith' : 'removed',
            data: o.message ? {
              message: o.message
            } : o.replacedWith.length > 0 ? {
              a: o.tag,
              b: kebabCase(String(o.replacedWith)).replace(/-q/g, ' q')
            } : {
              name: o.tag
            },
            node: element
            // there is nothing to fix for this rule
            // there is too much going on, but we can
            // look into it in the future to see if we
            // can do some of the tags
            // fix (fixer) {
            //   return fixer.replaceText(attr.node, replacement)
            // }
          })
        }
      }
    })
  }
}
