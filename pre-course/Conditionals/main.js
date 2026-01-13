// Exercise 1
// let numChildren = 2;
// let isCareful = false;

// if (!isCareful) {
//   numChildren++;
// }

// console.log(numChildren);

// Exercise 2
// const silverwareCount = 1;
// if (silverwareCount % 2 == 0) {
//   console.log("even num");
// } else {
//   console.log("something missing");
// }

// Exercise 3
// let performance = "stellar";
// let salary = 10000;
// const goodBonus = 1000;
// const stellarBonus = 3000;

// if (performance === "stellar") {
//   salary += stellarBonus;
// } else {
//   salary += goodBonus;
// }

// console.log(salary);

// Exercise 4
// const isVIP = false;
// let cash = 100;

// if (isVIP || cash > 300) {
//   console.log("Welcome");
// } else {
//   console.log("you can not go to the club");
// }

// Exercise 5
// const a = 3;
// let b = 2;
// let c = 0 || 12;
// let d;

// b = c;
// b++;
// if (d) {
//   b = a;
// }

// d = a + b * c;
// d++;
// b += 2;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Exercise 6
// const gender = null;
// let profession = "business";

// if (gender === "man") {
//   console.log(profession + gender);
// } else if (gender === "women") {
//   console.log(profession + gender);
// } else {
//   console.log("No " + profession);
// }

// Exercise 7
// let boughtTesla = true;
// const yearOfTeslaPurchase = 2014;
// let isUSCitizen = true;
// let currentYear = 2018;

// if (boughtTesla && isUSCitizen) {
//   const currentTeslaHolding = currentYear - yearOfTeslaPurchase;
//   console.log("you have tesla for " + currentTeslaHolding + " years");
//   if (currentTeslaHolding >= 4) {
//     console.log("Would you like an upgrade?");
//   } else {
//     console.log("do you love your tesla ? ");
//   }
// } else if (!isUSCitizen && boughtTesla) {
//   console.log("Would you like to move to the US? ");
// } else {
//   console.log("do you want to bay a tesla ? ");
// }

// let age = 20;
// if (age > 18) {
//   console.log("good");
// } else {
//   console.log("not good");
// }

// let grade = 25;

// if (grade >= 90) {
//   console.log("A");
// } else if (grade >= 80) {
//   console.log("B");
// } else if (grade >= 70) {
//   console.log("c");
// } else if (grade >= 60) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// let temperature = 20;
// let weather = "sunny";

// if (weather === "sunny" && temperature > 24) {
//   console.log("Go to the beach");
// } else if (weather === "sunny" && temperature >= 15 && temperature <= 24) {
//   console.log("Go for a walk");
// } else if (weather === "sunny" && temperature < 15) {
//   console.log("Stay inside and read");
// } else if (weather === "rainy") {
//   console.log("Watch a movie indoors");
// } else if (weather === "cloudy" && temperature > 21) {
//   console.log("Go hiking");
// } else if (weather === "cloudy" && temperature <= 21) {
//   console.log("Visit a museum");
// }

// let usernameLength = 6;
// let passwordLength = 7;
// let userAge = 15;

// if (usernameLength >= 5 && passwordLength >= 8 && userAge >= 13) {
//   console.log("ok you can create password");
// } else {
//   console.log("ok you can not create password");
// }

// let customerType = "premium";
// let purchaseAmount = 150;
// let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.

// if (customerType == "VIP" ) {
//     console.log(purchaseAmount - 0.2)

// } else if (customerType === "premium") {
//     discount = (dayOfWeek === 0 || dayOfWeek === 6) ? 0.15 : 0.10;
// }
// else if (customerType === "Regular") {
//     if (purchaseAmount > 100) {
//         purchaseAmount - 0.10
//     } else if (purchaseAmount > 50) {
//         purchaseAmount - 0.05
//     } else {
//         purchaseAmount - 0
//     }
// }

// let year = 2000;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(`${year} = leap`);
// } else {
//   console.log(`${year} = not leap`);
// }
