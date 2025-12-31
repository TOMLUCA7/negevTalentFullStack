// exercise 1
// let names = ["Tom", "Roi", "Coco"];
// let ages = [21, 23, 28];

// for (let i = 0; i < names.length; i++) {
//   console.log(`${names[i]} is ${ages[i]} years old`);
// }

// exercise 2 and 3
// let num = [1, 2, 3, 4, 5];
// let sum = 0;
// let avg = 0;
// for (let i = 0; i < num.length; i++) {
//   sum += num[i];
//   avg++;
// }

// console.log(`the sum is ${sum} and avg is ${sum / avg}`);

// exercise 4 and 5
// let i = 0;
// nums = [];

// while (i <= 100) {
//   nums.push(i);
//   i++;
// }

// console.log(nums);

// for (let j = 0; j < nums.length; j++) {
//   if (j % 2 == 1) console.log(`odd numbers are ${j}`);
// }

// exercise 6
// let nums = [
//   773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708,
//   197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817,
//   280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291,
//   404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382,
//   477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754,
//   23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243,
//   837, 21, 954, 146, 11,
// ];
// for (let index = 0; index < nums.length; index++) {
//   if (nums[index] === 709) console.log(index);
// }

// exercise 7 and 8
// const names = ["Ashley", "Donovan", "Lucas"];
// const ages = [23, 47, 18];
// const people = [];

// for (let i = 0; i < names.length; i++) {
//   console.log(`${names[i]} is ${ages[i]} years old`);
//   people.push({ name: names[i], age: ages[i] });
// }

// console.log(people);

// exercise 9
// const posts = [
//   { id: 1, text: "Love this product" },
//   { id: 2, text: "This is the worst. DON'T BUY!" },
//   { id: 3, text: "So glad I found this. Bought four already!" },
// ];

// for (let i = 0; i < posts.length; i++) {
//   let index = posts[1];
//   if (posts[i] === index) posts.splice(1, 1);
// }

// console.log(posts);

// exercise 10
// const posts = [
//   {
//     id: 1,
//     text: "Love this product",
//     comments: [],
//   },
//   {
//     id: 2,
//     text: "This is the worst. DON'T BUY!",
//     comments: [
//       { id: 1, text: "Idiot has no idea" },
//       { id: 2, text: "Fool!" },
//       { id: 3, text: "I agree!" },
//     ],
//   },
//   {
//     id: 3,
//     text: "So glad I found this. Bought four already!",
//     comments: [],
//   },
// ];

// for (let i = 0; i < posts.length; i++) {
//   if (posts[i].id === 2) {
//     for (let j = 0; j < posts[i].comments.length; j++) {
//       if (posts[i].comments[j].id === 3) {
//         posts[i].comments.splice(j, 1);
//       }
//     }
//   }
// }

// console.log(posts);
