const assert = require("assert");
const { simplify } = require("./index3");

function testSimplify() {
  assert.strictEqual(simplify("Hello!"), "Hello", "Should remove '!'");
  assert.strictEqual(
    simplify("Hi, how are you?"),
    "Hi how are you?",
    "Should remove ','"
  );
  assert.strictEqual(
    simplify("Wow... that's great!"),
    "Wow thats great",
    "Should remove '.', ''' and '!'"
  );
  assert.strictEqual(
    simplify("#Cool, isn't it?"),
    "Cool isnt it?",
    "Should remove '#', ',' and '''"
  );
  assert.strictEqual(
    simplify("No symbols here"),
    "No symbols here",
    "Should not change string without those symbols"
  );

  // Exercise 5 edge cases
  assert.strictEqual(simplify(""), "", "Empty string should stay empty");
  assert.throws(
    () => simplify(),
    TypeError,
    "Missing param should throw TypeError"
  );
  assert.throws(
    () => simplify(null),
    TypeError,
    "null should throw TypeError"
  );

  console.log("✅ simplify unit tests passed");
}

testSimplify();

