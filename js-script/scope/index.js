// 1
// const run = true; // global

// if (run) {
//   let distance = 8; // belong to the if blok
//   for (var i = 0; i < distance; i++) {
//     // i dont belong to for loop
//     console.log("running"); // 8 times running
//   }
//   console.log("Finished running " + distance + " miles"); // print onec when for loop over
// }

// console.log("Damn, you see this gal? She ran " + distance + " miles"); // error distance belog to for loop

// 2
// if (13 == "space") { // No variable defined for 13 and space
//     let cowSound = "moo" // only in if condetion
// }
// else {
//     console.log("Cow says " + cowSound) // the els dont see the cowSound variable
// }

// 3
// all good
// const serveOrders = function (orders) {
//   for (let order of orders) {
//     let specialOrder = "special " + order;
//     console.log("Served a " + specialOrder);
//   }

//   console.log("Finished serving all the orders: " + orders);
// };
// const allOrders = ["fish", "lettuce plate", "curious cheese"];

// serveOrders(allOrders);

// 4
// const pot = "red pot with earth in it"; // blobal variable

// const getSeed = function () {
//   const seed = "brown seed"; // belog to getSeed func
// };

// const plant = function () {
//   getSeed();
//   console.log("Planting the " + seed + " inside a " + pot); // dont see the seed variable
// };

// plant();

// 5

// const doesUserExist = function (name) {
//   const users = [
//     { name: "Shapira", age: 19 },
//     { name: "Lucius", age: 23 },
//   ];
//   for (let u of users) {
//     if (u.name == name) {
//       const found = true; // found is not defined brack all - error
//     }
//   }
//   return found;
// };

// const userExists = doesUserExist("Lucius");
// if (userExists) {
//   console.log("We found the ragamuffin!");
// } else {
//   console.log("No idea where this person is.");
// }

// 6
// const isEnough = false; // global

// const makeEnough = function () {
//   for (let i = 0; i < 10; i++) {
//     if (i > 5) {
//       isEnough = true; // const cant change need to use let
//     }
//   }
// };

// makeEnough();
// if (isEnough) {
//   console.log("Finally, sheesh");
// } else {
//   console.log("Here we go again...");
// }
