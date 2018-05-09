const assert = require("assert");

// https://nodejs.org/docs/latest-v8.x/api/assert.html

function makeGreeting() {}

// https://nodejs.org/docs/latest-v8.x/api/assert.html#assert_assert_strictequal_actual_expected_message

assert.strictEqual(makeGreeting(), "Hello world!");
