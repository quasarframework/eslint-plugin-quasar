/**
 * @fileoverview no legacy properties
 * @author Jeff
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "disallow use of legacy properties that have changed or been removed from Quasar v1.x",
      category: "legacy",
      recommended: false
    },
    fixable: null,  // null or "code" or "whitespace"
    schema: [
        // fill in your schema
    ],
    messages: {
      // replacedWith: `'{{ a }}' has been replaced with '{{ b }}'`,
      removed: `'{{ name }}' property has been removed`
    }
  },

  create: function(context) {

    const { toComponent, kebabCase } = require('../utils/helpers.js')
    const { components } = require('../utils/quasar-components.js')
    // components that have legacy props
    const legacyComponents = components.filter(c => c.legacy !== void 0 && c.legacy.props !== void 0 && c.legacy.props.length > 0)
    const legacyArray = []
    legacyComponents.forEach(c => {
      legacyArray.push(c.tag)
    })

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    function getObject (name) {
      return legacyComponents.find(c => c.tag === name)
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
          const attrs = element.startTag.attributes
          if (attrs.length > 0) {

            // get array of invalid props
            let props = o.legacy.props

            let reports = []
            // iterate through attributes and see if any are invalid
            // Note: this could probably be done through an AST selector
            for (let index = 0; index < attrs.length; ++index) {
              let attribute = attrs[index]
              if (attribute.directive === false) {
                let name = attribute.key.name
                if (props.includes(name)) {
                  reports.push(context.report({
                    messageId: 'removed',
                    data: {
                      name: attribute.key.name
                    },
                    node: attribute.key
                  }))
                }
              }
            }
            if (reports.legth > 0) {
              return reports
            }
          }
        }
      }
    })
  }
}
