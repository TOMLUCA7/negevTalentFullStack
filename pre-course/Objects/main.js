// const bag = {
//   weight: 10,
//   owner: "Larissa",
//   items: ["Pen", "Bottle", "Book"],
// };

// console.log(bag.items[0]); // prints ["Pen", "Bottle", "Book"]

// let car = {
//   color: "red",
//   numWheels: 4,
//   isFancy: true,
// };

// console.log(
//   `The ${car.color} car has ${car.numWheels} wheels. It is ${
//     car.isFancy ? "Fancy" : "It is not fancy"
//   }`
// );

// let carsCompane = {
//   item: "Audi",
//   toBeginning: true,
//   items: ["Ferrari", "Alpin", "Mercedes"],
// };

// if (carsCompane.toBeginning) {
//   carsCompane.items.unshift(carsCompane.item);
// } else {
//   carsCompane.items.push(carsCompane.item);
// }

// console.log(carsCompane.items);

// const human = {
//   age: 0,
// };

// const babyNameKey = "name";
// const babyNameValue = "Goojibear";

// human[babyNameKey] = babyNameValue; // add key call name
// human[babyNameKey] = "Tom"; // change the name value to Tom

// console.log(human);

//------------------------------------------------------

// Exercise 1
// let p1 = {
//   name: "Roi",
//   age: 23,
//   city: "'Tel-Aviv'",
// };

// let p2 = {
//   name: "Coco",
//   age: 30,
//   city: "Eilat",
// };

// if (p1.age === p2.age && p1.city === p2.city) {
//   console.log("Jill wanted to date Robert");
// } else {
//   console.log("Jill wanted to date Robert, but couldn't");
// }

// Exercise 2
// let myList = [
//   {
//     CarName: "Ferrari",
//     color: "Red",
//   },
//   {
//     CarName: "Mercedes",
//     color: "Black",
//   },
// ];

// myList[0].color = "Yellow";
// myList.splice(myList.length - 1);

// console.log(myList);

// Exercise 3
// let myList_2 = [
//   {
//     CarName: "Aston Martin",
//     color: "Green",
//   },
//   {
//     CarName: "Maclaren",
//     color: "Orange",
//   },
// ];

// myList.push(...myList_2);

// console.log(myList);

// Exercise 4
// let library = {
//   books: [
//     { title: "The Hobbit", author: "J.R.R. Tolkien" },
//     { title: "Harry Potter", author: "J.K. Rowling" },
//   ],
// };

// let myList = [];

// myList.push(library);

// console.log(myList);

// Exercise 5
// const reservations = {
//   bob: { claimed: false },
//   ted: { claimed: true },
// };

// const name = "Ted";
// const LowerCaseName = name.toLowerCase(); // Exercise 5.2

// if (
//   reservations[LowerCaseName] &&
//   reservations[LowerCaseName].claimed === false
// ) {
//   console.log(`Welcome, ${LowerCaseName}`);
// } else if (
//   reservations[LowerCaseName] &&
//   reservations[LowerCaseName].claimed !== false
// ) {
//   console.log(`Hmm, someone already claimed this reservation`);
// } else {
//   console.log(
//     "You have no reservation ! , but do not go we have free tabels have a set !"
//   );
//   // Exercise 5.1
//   reservations[LowerCaseName] = { claimed: true };
// }

// console.log(reservations);

// Exercise 6 Extra
// const date = 3;

// const kitchen = {
//   owner: "Geraldine",
//   hasOven: false,
//   fridge: {
//     price: 500,
//     works: false,
//     items: [
//       { name: "cheese", expiryDate: 7 },
//       { name: "raddish", expiryDate: 2 },
//       { name: "bread", expiryDate: 1 },
//     ],
//   },
// };

// const BrokFridge =
//   kitchen.fridge.works === false ? kitchen.fridge.price / 2 : 0;
// const owner = kitchen.owner;
// const hasOven = kitchen.hasOven;
// const fridgeWorks = kitchen.fridge.works;
// const item = kitchen.fridge.items[1].name;
// const expiry = date - kitchen.fridge.items[1].expiryDate;

// if (kitchen.hasOven === true && kitchen.fridge.works === true) {
//   console.log("All good you have very good kitchen !");
// } else if (kitchen.hasOven !== true && kitchen.fridge.works === true) {
//   console.log("Your oven do not work but your fridge works");
// } else if (kitchen.hasOven === true && kitchen.fridge.works !== true) {
//   console.log("Your oven works but your fridge dont");
// } else {
//   console.log(
//     `${owner}'s ${item} expired ${expiry} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${item} in. And she'll have to pay ${BrokFridge} to fix the fridge.`
//   );
// }
