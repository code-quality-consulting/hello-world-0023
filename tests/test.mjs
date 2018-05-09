/*jslint
    node
*/
import assert from "assert";
import {makeGreeting} from "../greeting";

assert.strictEqual(makeGreeting(), "Hello world!");
assert.strictEqual(makeGreeting("Mike"), "Hello Mike!");
assert.strictEqual(makeGreeting("", "Spanish"), "¡Hola mundo!");
console.log("All tests have passed.");
