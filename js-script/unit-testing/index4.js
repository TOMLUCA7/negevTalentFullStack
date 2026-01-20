// Exercise 4 - TDD validate function
// The function receives an array that may contain booleans and other types.
// - If there is no boolean at all -> return { error: "Need at least one boolean" }
// - If there are more true than false booleans -> return true
// - Otherwise (more false or equal) -> return false

function validate(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("validate expects an array");
  }
  // keep only booleans
  const booleans = arr.filter((item) => typeof item === "boolean");

  if (booleans.length === 0) {
    return { error: "Need at least one boolean" };
  }

  const trueCount = booleans.filter((b) => b === true).length;
  const falseCount = booleans.filter((b) => b === false).length;

  return trueCount > falseCount;
}

module.exports = { validate };

