/*jslint
    node
*/
const assert = require("assert");

// https://nodejs.org/docs/latest-v8.x/api/assert.html

function makeGreeting() {
    "use strict";
    return "Hello world!";
}

// https://nodejs.org/docs/latest-v8.x/api/assert.html#assert_assert_strictequal_actual_expected_message

assert.strictEqual(makeGreeting(), "Hello world!");
console.log("All tests have passed.");
