// 1
// const isEven = (num) => num % 2 === 0;
// console.log(isEven(1));

// 2

// const list = [13, 17, 10];

// const chackIsEven = (list) => {
//   for (let i = 0; i < list.length; i++) {
//     if (!isEven(list[i])) {
//       console.log(list[i]);
//     }
//   }
// };

// chackIsEven(list);

// 3
// const checkExists = (list, num) => {
//.    option 1
//     for (let i of list) {
//       if (list[i] == num) return true;
//     }
//     return false;
//.   option 2
//   if (list.includes(num)) {
//     return true;
//   }
//   return false;
// };

// console.log(checkExists([1, 2, 3, 4], 73));

// 4
// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
// };

// const result1 = calculator.add(20, 1);
// const result2 = calculator.subtract(30, 9);

// console.log(calculator.add(result1, result2));

// 5
// const increaseByNameLength = (money, fname) => {
//   return fname + " has " + (money + 1200);
// };
// const makeRegal = (fname) => {
//   return (fname = "His Royal Highness,");
// };

// const turnToKing = function (name, money) {
//   name = name.toUpperCase();
//   money = increaseByNameLength(money, name);
//   name = makeRegal(name);

//   console.log(name + " " + money + " gold coins");
// };

// turnToKing("martin luther", 100);

// 6
// const ArmstrongNum = () => {
//   for (let i = 100; i <= 999; i++) {
//     let sum = 0;
//     const digits = String(i);
//     for (let first of digits) {
//       sum += first ** 3;
//     }
//     if (sum === i) {
//       console.log(i);
//     }
//   }
// };

// ArmstrongNum();

// 7
// const people_info = [
//   {
//     name: "guido",
//     profession: "bungalow builder",
//     age: 17,
//     country: "canaland",
//     city: "sydurn",
//     catchphrase: "what a piece of wood!",
//   },
//   {
//     name: "petra",
//     profession: "jet plane mechanic",
//     age: 31,
//     country: "greenmark",
//     city: "bostork",
//     catchphrase: "that's my engine, bub",
//   },
//   {
//     name: "damian",
//     profession: "nursery assistant",
//     age: 72,
//     country: "zimbia",
//     city: "bekyo",
//     catchphrase: "with great responsibility comes great power",
//   },
// ];

// const locations = people_info.map((person) => {
//   return `${person.city}, ${person.country}`;
// });

// const clocations = people_info.map((person) => {
//   if (person.age > 55) return "55+";
//   if (person.age < 21) return "Underage";
//   return person.age;
// });

// const capitalize = function (str) {
//   let capitalizedStr = "";
//   capitalizedStr += str[0].toUpperCase();
//   capitalizedStr += str.slice(1);
//   return capitalizedStr;
// };

// const getSummary = function (person) {
//   let summary = "";
//   summary += capitalize(person.name);
//   summary += ` is ${clocations(person.age)} `;
//   summary += capitalize(person.profession);
//   summary += ` from ${locations(person.city, person.country)}. `;
//   summary += `${capitalize(person.name)} loves to say "${person.catchphrase}".`;

//   return summary;
// };
