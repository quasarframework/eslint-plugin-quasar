/**
 * @fileoverview ...desc
 * @author Jeff &lt;jeff@quasar.dev&gt;
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-legacy-plugins"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-legacy-plugins", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "ActionSheet",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
