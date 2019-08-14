/**
 * @fileoverview no legacy properties
 * @author Jeff
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-legacy-properties"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-legacy-properties", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "<div></div>",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
