/**
 * @fileoverview No legacy components allowed in v1+ code
 * @author Jeff &lt;jeff@quasar.dev&gt;
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-legacy-components"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-legacy-components", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "<q-action-sheet",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
