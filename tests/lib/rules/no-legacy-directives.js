/**
 * @fileoverview ...desc
 * @author Jeff &lt;jeff@quasar.dev&gt;
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-legacy-directives"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-legacy-directives", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "v-close-overlay",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
