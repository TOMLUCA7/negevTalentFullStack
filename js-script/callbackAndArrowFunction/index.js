// // 1
// const push = function () {
//   console.log("pushing it!");
// };

// const pull = function () {
//   console.log("pulling it!");
// };

// const pushPull = (callback) => callback();

// pushPull(push); //should print "pushing it!"
// pushPull(pull); //should print "pulling it!"

// 2
// const returnTime = function (time) {
//   console.log("The current time is: " + time);
// };

// const getTime = (func) => {
//   const currentTime = new Date();
//   func(currentTime);
// };

// getTime(returnTime);

// 3
// const displayData = function (alertDataFunc, logDataFunc, data) {
//   alertDataFunc(data);
//   logDataFunc(data);
// };

// const logData = (text) => console.log(text);

// displayData(console.error, logData, "I like to party");

// 4
// const sumProps = (n1, n2, n3) => n1 + n2 + n3;

// console.log(sumProps(1, 2, 3));

// 5

// long way
// const capitalize = (text) => {
//   const firstLeter = text[0].toUpperCase();
//   const lastLeters = text.slice(1).toLowerCase();
//   return firstLeter + lastLeters;
// };

// one line way
// const capitalize = (text) =>
//   text[0].toUpperCase() + text.slice(1).toLowerCase();

// console.log(capitalize("bOb")); // returns Bob
// console.log(capitalize("TAYLOR")); // returns Taylor
// console.log(capitalize("feliSHIA")); // returns Felishia

// capitalize("bOb"); // returns Bob
// capitalize("TAYLOR"); // returns Taylor
// capitalize("feliSHIA"); // returns Felishia

// 6
// const determineWeather = (temp) => {
//   if (temp > 25) {
//     return "hot";
//   }
//   return "cold";
// };

// const commentOnWeather = (tempnum) => `Its ${determineWeather(tempnum)}`;

// console.log(commentOnWeather(30)); //returns "It's hot"
// console.log(commentOnWeather(22)); //returns "It's cold"
