// 1
class UniqueArray {
  constructor() {
    this.items = [];
    this.itemSet = new Set();
  }
  // exercise 1
  // exists = (item) => this.itemSet.has(item);

  // exercise 2
  exists = (item) => {
    for (let i = 0; i < this.items.length; i++) {
      if (JSON.stringify(this.items[i]) === JSON.stringify(item)) {
        return true;
      }
    }
    return false;
  };

  // exercise 1
  //   add = (item) => {
  //     if (!this.exists(item)) {
  //       this.items.push(item);
  //       this.itemSet.add(item);
  //     }
  //   };

  // exercise 2
  add = (item) => {
    if (!this.exists(item)) {
      this.items.push(item);
    }
  };

  showAll = () => {
    return this.items;
  };

  get = (index) => {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    }
    return -1;
  };
}

const uniqueStuff = new UniqueArray();

uniqueStuff.add("toy");
console.log(uniqueStuff.showAll()); // prints ["toy"]

uniqueStuff.add("toy");
console.log(uniqueStuff.showAll()); // prints ["toy"]
console.log(uniqueStuff.exists("toy")); // prints true

uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");

console.log(uniqueStuff.get(2)); //prints "hydrogen"
