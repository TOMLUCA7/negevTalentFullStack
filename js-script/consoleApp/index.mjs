import readline from "readline/promises"; // build in

import promptSync from "prompt-sync"; // instold library
const prompt = promptSync();

// 1
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// async function runCalculator() {
//   console.log("--- calculator ---");

//   // inputs
//   const num1 = await rl.question(" enter first num : ");
//   const op = await rl.question(" enter operator (+, -, *, /): ");
//   const num2 = await rl.question(" enter second num : ");

//   const n1 = Number(num1);
//   const n2 = Number(num2);
//   let result;

//   if (op === "+") result = n1 + n2;
//   else if (op === "-") result = n1 - n2;
//   else if (op === "*") result = n1 * n2;
//   else if (op === "/") result = n2 !== 0 ? n1 / n2 : ":  error";
//   else result = "invalid ";

//   console.log(` result : ${result}`);

//   rl.close();
// }

// runCalculator();

// 2
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// async function runQuiz() {
//   console.log("--- Quiz ---");

//   const question = [
//     "What is the capital of France?",
//     "What is the capital of Germany?",
//     "What is the capital of Italy?",
//   ];
//   const answers = ["Paris", "Berlin", "Rome"];

//   let score = 0;

//   for (let i = 0; i < question.length; i++) {
//     const answer = await rl.question(question[i]);
//     if (answer.toLowerCase() === answers[i].toLowerCase()) {
//       score++;
//     }
//   }

//   console.log(`Your score is ${score} / ${question.length} `);

//   rl.close();
// }

// runQuiz();

// 2 - with prompt library

// function runQuiz() {
//   const quizData = [
//     { question: "What is 2 + 2?", answer: "4" },
//     { question: "What is the capital of France?", answer: "Paris" },
//     {
//       question: "What year is it?",
//       answer: new Date().getFullYear().toString(),
//     },
//   ];

//   let score = 0;

//   console.log("=== Welcome to the Quiz! ===\n");

//   for (let i = 0; i < quizData.length; i++) {
//     const userAnswer = prompt(`Question ${i + 1}: ${quizData[i].question} `);

//     if (userAnswer.toLowerCase() === quizData[i].answer.toLowerCase()) {
//       console.log("Correct! ✅");
//       score++;
//     } else {
//       console.log(`Wrong... The correct answer was: ${quizData[i].answer} ❌`);
//     }
//   }

//   console.log("\n--- Final Score ---");
//   console.log(
//     `You got ${score}/${quizData[quizData.length] ? "" : quizData.length} correct!`,
//   );
// }

// runQuiz();

// 3
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// async function runUserRegistration() {
//   console.log("--- tell us about yourself ---");

//   const question = [
//     "What is your name?",
//     "What is your email?",
//     "What is your age?",
//     "What is your favorite color?",
//   ];

//   let answers = [];

//   for (let i = 0; i < question.length; i++) {
//     const answer = await rl.question(question[i]);
//     answers.push(answer);
//   }

//   console.log(
//     `Registration Summary: name - ${answers[0]}, email - ${answers[1]}, age - ${answers[2]}, favorite color - ${answers[3]}`,
//   );

//   rl.close();
// }

// runUserRegistration();

// 4
// async function bankingSystem() {
//   let balance = 100;
//   let running = true;

//   console.log("=== Banking System ===");

//   while (running) {
//     console.log(
//       "\n1) Check Balance\n2) Deposit Money\n3) Withdraw Money\n4) Exit",
//     );

//     const choice = await rl.question("Choose option (1-4): ");

//     switch (choice) {
//       case "1":
//         console.log(`Your balance is: $${balance}`);
//         break;

//       case "2":
//         const deposit = Number(await rl.question("Enter amount to deposit: "));
//         if (deposit > 0) {
//           balance += deposit;
//           console.log(`New balance: $${balance}`);
//         } else {
//           console.log("Error: Please enter a positive number.");
//         }
//         break;

//       case "3":
//         const withdraw = Number(
//           await rl.question("Enter amount to withdraw: "),
//         );
//         if (withdraw > 0 && withdraw <= balance) {
//           balance -= withdraw;
//           console.log(`New balance: $${balance}`);
//         } else if (withdraw > balance) {
//           console.log("Error: Insufficient funds.");
//         } else {
//           console.log("Error: Please enter a positive number.");
//         }
//         break;

//       case "4":
//         console.log("Have a nice day! Goodbye.");
//         running = false;
//         break;

//       default:
//         console.log("Invalid choice, please select 1-4.");
//     }
//   }
// }

// bankingSystem();
