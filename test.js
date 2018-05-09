/*jslint
    node
*/
const assert = require("assert");

// https://nodejs.org/docs/latest-v8.x/api/assert.html

function makeGreeting(name) {
    "use strict";
    if (name) {
        return "Hello " + name + "!";
    }
    return "Hello world!";
}

// https://nodejs.org/docs/latest-v8.x/api/assert.html#assert_assert_strictequal_actual_expected_message

assert.strictEqual(makeGreeting(), "Hello world!");
assert.strictEqual(makeGreeting("Mike"), "Hello Mike!");
console.log("All tests have passed.");
