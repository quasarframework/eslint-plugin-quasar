/**
 * @fileoverview Checks correct usage of component properties
 * @author Jeff Galbraith <jeff@quasar.dev)
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: "Checks correct usage of component properties, events and slots",
      category: "current",
      url: "", // url to docs
      recommended: true
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
        // fill in your schema
    ],
    messages: {
      notProperty: `'{{ a }}' is not a property of '{{ b }}'`
    }
  },

  create: function(context) {

      // variables should be defined here

      // get quasar version
      const { getQuasarVersion, getQuasarJsonApi } = require('../utils/helpers.js')
      const { quasarFound, quasarVersion } = getQuasarVersion()

      const cmp = require('semver-compare')
      let { components } = require('../utils/quasar-components.js')
      components = components.filter(c => c.version !== void 0)
      const componentsArray = []
      components.forEach(c => {
          componentsArray.push(c.tag)
      })

      const { domProps } = require('../utils/dom-props.js')
      const { vueProps } = require('../utils/vue-props.js')

  //----------------------------------------------------------------------
  // Helpers
  //----------------------------------------------------------------------

  function getObject (tag) {
      return components.find(c => c.tag === tag)
  }

  function isValidProp (prop) {
    return vueProps.includes(prop) || domProps.includes(prop) || prop.startsWith('data-') || prop.startsWith('aria-')
  }

  //----------------------------------------------------------------------
  // Public
  //----------------------------------------------------------------------

  return context.parserServices.defineTemplateBodyVisitor({
      VElement (element) {

        // make sure this is a quasar component
        if (!componentsArray.includes(element.rawName)) {
          return
        }

        // get component object
        let o = getObject(element.rawName)

        // check validness
        if (o !== void 0) {
          let api = getQuasarJsonApi(o.name)

          if (api !== void 0) {
            const attrs = element.startTag.attributes

            let reports = []
            let invalidProps = []
            if (attrs.length > 0) {
              attrs.forEach(a => {
                if (a.directive === false) {
                  if (api.props && api.props[a.key.name] === void 0) {
                    if (!isValidProp(a.key.name)) {
                      reports.push(context.report({
                        messageId: 'notProperty',
                        data: {
                          a: a.key.name,
                          b: o.name
                        },
                        node: a.key
                      }))
                    }
                  }
                } else {
                  // check type of directive
                  // we are looking for v-bind (:)
                  if (a.key.name.name === 'bind') {
                    if (api.props && api.props[a.key.argument.name] === void 0) {
                      if (!isValidProp(a.key.argument.name)) {
                        reports.push(context.report({
                          messageId: 'notProperty',
                          data: {
                            a: a.key.argument.name,
                            b: o.name
                          },
                          node: a.key
                        }))
                      }
                    }
                  }
                }
              })

              if (reports.length > 0) {
                return reports
              }
            }
          }
        }
      }
    })
  }
}

