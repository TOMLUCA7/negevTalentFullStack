// 1
class UniqueArray {
  constructor() {
    this.items = [];
    this.itemSet = new Set();
  }

  exists = (item) => this.itemSet.has(item);

  add = (item) => {
    if (!this.exists(item)) {
      this.items.push(item);
      this.itemSet.add(item);
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
