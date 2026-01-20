const assert = require("assert");
const { removeAtLeastOne } = require("./index2");

function testRemoveAtLeastOne() {
  const original = [1, 2, 3, 4, 5];
  const copy = [...original];

  const result = removeAtLeastOne(copy);

  // should still be an array
  assert.ok(Array.isArray(result), "Result should be an array");

  // should remove at least one element
  assert.ok(
    result.length < original.length,
    "Array length should be smaller than original"
  );

  // should not add new elements
  assert.ok(
    result.length >= 0 && result.length <= original.length - 1,
    "Array length should be between 0 and original length - 1"
  );

  // Exercise 5 edge cases
  assert.throws(
    () => removeAtLeastOne(),
    TypeError,
    "Missing param should throw TypeError"
  );
  assert.throws(
    () => removeAtLeastOne("not an array"),
    TypeError,
    "Wrong type should throw TypeError"
  );
  assert.throws(
    () => removeAtLeastOne([]),
    Error,
    "Empty array cannot remove at least one element"
  );

  console.log("✅ removeAtLeastOne unit tests passed");
}

testRemoveAtLeastOne();

