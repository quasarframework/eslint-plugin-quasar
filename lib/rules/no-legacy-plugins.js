/**
 * @fileoverview ...desc
 * @author Jeff <jeff@quasar.dev>
 */
"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const utils = require('../utils')

const { plugins } = require('../utils/quasar-plugins.js')
// plugins that are legacy
const legacyPlugins = plugins.filter(p => p.replacedWith !== void 0)
const plugins2 = plugins.filter(p => p.version !== void 0)
const pluginsArray = []
plugins2.forEach(p => {
  pluginsArray.push(p.tag)
})

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow use of legacy plugins that have been removed from Quasar v1.x",
      category: "Possible Errors",
      recommended: false
      // url: url-to-docs
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
    messages: {
      replacedWith: `'$q.{{ a }}' plugin has been replaced with '$q.{{ b }}'`,
      removed: `'{{ name }}' has been removed`
    }
  },

  create: function(context) {

    return utils.defineTemplateBodyVisitor(context, {
      "VAttribute[directive=true][key.name.name='bind'] > VExpressionContainer" (node) {
        let pluginName
        let property
        if (node.expression &&
          node.expression.object &&
          node.expression.object.name === '$q') {
            property = node.expression.property
            pluginName = property.name
        }
        else if (node.expression &&
          node.expression.object &&
          node.expression.object.object &&
          node.expression.object.object.object &&
          node.expression.object.object.object.name === '$q') {
          property = node.expression.object.object.property
          pluginName = property.name
        }

        if (property !== void 0 && pluginName !== void 0) {
          if (pluginsArray.includes(pluginName) !== true) {
            const o = legacyPlugins.find(p => p.tag === pluginName)
            if (o) {
              return context.report({
                messageId: o.replacedWith.length > 0 ? 'replacedWith' : 'removed',
                data: o.replacedWith.length > 0 ? {
                  a: o.tag,
                  b: o.replacedWith
                } : {
                  tag: o.tag
                },
                // return the JSXAttribute (Node)
                node: property
              })
            }
          }
        }
      }
    })
  }
}
