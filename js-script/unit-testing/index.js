// should return true if n is even, false otherwise
function isEven(n) {
  if (typeof n !== "number") {
    throw new TypeError("isEven expects a number");
  }
  return n % 2 === 0 ? true : false;
}

module.exports = { isEven };