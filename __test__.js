"use strict";

var assert = require("assert");
var color = require(".");

assert.deepEqual(color.red.hex, "#FF0000");
assert.deepEqual(color.red.rgb, [255, 0, 0]);

assert.deepEqual(color.violetred4.hex, "#8B2252");
assert.deepEqual(color.violetred4.rgb, [139, 34, 82]);
