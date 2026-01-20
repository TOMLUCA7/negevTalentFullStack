const assert = require("assert");
const { validate } = require("./index4");

function testValidate() {
  // no booleans at all
  assert.deepStrictEqual(
    validate([1, "a", null]),
    { error: "Need at least one boolean" },
    "Should return error object when there is no boolean"
  );

  // at least one boolean, more trues than falses -> true
  assert.strictEqual(
    validate([true, true, false]),
    true,
    "More trues than falses should return true"
  );

  // more falses than trues -> false
  assert.strictEqual(
    validate([true, false, false]),
    false,
    "More falses than trues should return false"
  );

  // equal number of trues and falses -> false
  assert.strictEqual(
    validate([true, false]),
    false,
    "Equal number of trues and falses should return false"
  );

  // mix of booleans and other types, counting only booleans
  assert.strictEqual(
    validate([true, "x", false, 0, true]),
    true,
    "Should count only boolean values"
  );

  // Exercise 5 edge cases
  assert.throws(() => validate(), TypeError, "Missing param should throw TypeError");
  assert.throws(
    () => validate("not an array"),
    TypeError,
    "Wrong type should throw TypeError"
  );
  assert.deepStrictEqual(
    validate([]),
    { error: "Need at least one boolean" },
    "Empty array has no booleans -> error object"
  );

  console.log("✅ validate unit tests passed");
}

testValidate();

