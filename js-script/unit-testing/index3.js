// should return a clean string without these symbols: "!", "#", ".", ",", "'"
function simplify(str) {
  if (typeof str !== "string") {
    throw new TypeError("simplify expects a string");
  }
  const symbols = ["!", "#", ".", ",", "'"];
  return str
    .split("")
    .filter((c) => symbols.indexOf(c) === -1)
    .join("");
}

module.exports = { simplify };