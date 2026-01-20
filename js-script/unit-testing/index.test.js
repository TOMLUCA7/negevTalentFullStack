const assert = require("assert");
const { isEven } = require("./index");

function testIsEven() {
  assert.strictEqual(isEven(2), true, "2 should be even");
  assert.strictEqual(isEven(3), false, "3 should be odd");
  assert.strictEqual(isEven(0), true, "0 should be even");
  assert.strictEqual(isEven(-4), true, "-4 should be even");
  assert.strictEqual(isEven(-5), false, "-5 should be odd");

  // Exercise 5 edge case: wrong type / missing param
  assert.throws(() => isEven(), TypeError, "Missing param should throw TypeError");
  assert.throws(
    () => isEven("2"),
    TypeError,
    "Wrong type (string) should throw TypeError"
  );

  console.log("✅ isEven unit tests passed");
}

testIsEven();

