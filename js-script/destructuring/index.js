// // 1
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846

// 2
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659,
// };

// let { numPlanets, ...discoveryYears } = planetFacts;

// console.log(discoveryYears); // { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }

// 3

// function getUserData({ firstName, favoriteColor = "green" }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// console.log(getUserData({ firstName: "Alejandro", favoriteColor: "purple" })); // Your name is Alejandro and you like purple
// console.log(getUserData({ firstName: "Melissa" })); // Your name is Melissa and you like green
// console.log(getUserData({})); // Your name is undefined and you like green

// 4

// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // Maya
// console.log(second); // Marisa
// console.log(third); // Chi
