/**
 * @fileoverview tertiary
 * @author Jeff &lt;jeff@quasar.dev&gt;
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-legacy-css"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-legacy-css", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "tertiary",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
