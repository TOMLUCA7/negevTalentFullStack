// 1

class BSNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertNode(value) {
    let current = this;

    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = new BSNode(value);
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = new BSNode(value);
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  findNode(value) {
    let current = this;

    while (current !== null) {
      if (value === current.value) {
        return true;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  // 2
  findCommonParent(val1, val2) {
    let current = this;

    while (current !== null) {
      if (val1 < current.value && val2 < current.value) {
        current = current.left;
      } else if (val1 > current.value && val2 > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }
}

// const letters = ["H", "E", "S", "G", "L", "Y", "I"];

// const bSTree = new BSNode(letters[0]);

// for (let i = 1; i < letters.length; i++) {
//   bSTree.insertNode(letters[i]);
// }

// console.log(bSTree.findNode("H")); //  print true
// console.log(bSTree.findNode("G")); //  print true
// console.log(bSTree.findNode("Z")); //  print false
// console.log(bSTree.findNode("F")); //  print false
// console.log(bSTree.findNode("y")); //  print false - because Y is upper case

// 2

const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];

const bSTree = new BSNode(letters[0]);

for (let i = 1; i < letters.length; i++) {
  bSTree.insertNode(letters[i]);
}

//insert nodes from array

console.log(bSTree.findCommonParent("B", "I")); // return "H"
console.log(bSTree.findCommonParent("B", "G")); // return "E"
console.log(bSTree.findCommonParent("B", "L")); // return "J"
console.log(bSTree.findCommonParent("L", "Y")); // return "R"
console.log(bSTree.findCommonParent("E", "H")); // return "J"
