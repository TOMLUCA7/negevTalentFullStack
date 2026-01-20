// should remove at least one element from the array `arr`
function removeAtLeastOne(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("removeAtLeastOne expects an array");
  }
  if (arr.length === 0) {
    throw new Error("Cannot remove from an empty array");
  }
  const numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
  arr.splice(0, numItemsToRemove);
  return arr;
}

module.exports = { removeAtLeastOne };