// 1

// const StringFormatter = () => {
//   const capitalizeFirst = (str) => {
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
//   };

//   const toSkewerCase = (str) => {
//     return str.replace(" ", "-");
//   };

//   return {
//     capitalizeFirst,
//     toSkewerCase,
//   };
// };

// const formatter = StringFormatter();

// console.log(formatter.capitalizeFirst("dorothy"));
// console.log(formatter.toSkewerCase("blue box"));

// 2

// const Bank = () => {
//   let money = 500;

//   const deposit = (num) => {
//     money = num + money;
//     return money;
//   };

//   const showBalance = () => money;

//   return {
//     deposit,
//     showBalance,
//   };
// };

// const bank = Bank();
// console.log(bank.deposit(200));
// console.log(bank.deposit(250));
// console.log("show Balance" + " " + bank.showBalance()); //should print 950

// 3

// const SongsManager = () => {
//   let allSongs = {};

//   const addSong = (genre, songURL) => {
//     allSongs[genre] = songURL;
//     return allSongs;
//   };

//   const getSong = (genre) => {
//     return allSongs[genre];
//   };

//   return {
//     addSong,
//     getSong,
//   };
// };

// const songsManager = SongsManager();
// console.log(
//   songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ"),
// );
// console.log(
//   songsManager.addSong(
//     "how long",
//     "https://www.youtube.com/watch?v=CwfoyVa980U",
//   ),
// );
// console.log(
//   songsManager.addSong(
//     "ain't me",
//     "https://www.youtube.com/watch?v=D5drYkLiLI8",
//   ),
// );

// console.log(songsManager.getSong("sax")); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
