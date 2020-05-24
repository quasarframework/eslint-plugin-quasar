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
            description: "disallow use of legacy other that have been removed from Quasar v1.x",
            category: "Possible Errors",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ],
        messages: {
            replacedWith: `'{{ a }}' has been replaced with '{{ b }}'`,
            removed: `'{{ name }}' has been removed`
        }
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods

        };
    }
};
