import { getPosts, addPosts } from "./data.js";

// function addItem() {
//   const input = document.getElementById("itemInput");
//   const list = document.getElementById("shoppingList");

//   const value = input.value.trim();

//   if (value === "") return;

//   const li = document.createElement("li");
//   li.textContent = value;

//   list.appendChild(li);

//   input.value = "";
// }

// const rollDice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const random = Math.random();

//       if (random < 0.1) {
//         reject("The dice fell off the table");
//       } else {
//         const result = Math.floor(Math.random() * 6) + 1;
//         resolve(result);
//       }
//     }, 500);
//   });
// };

// rollDice()
//   .then((num) => console.log("You rolled a " + num))
//   .catch((err) => console.error(err));

// 1
// UI
const Post = (postsList) => {
  const container = document.getElementById("postsContainer");

  // 1) delete UI
  container.innerHTML = "";

  // 2) Loop over shooping and add items 1 by 1
  for (const post of postsList) {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `<strong>${post.name}:</strong> ${post.text}`;
    container.appendChild(postDiv);
  }
};

addEventListener("DOMContentLoaded", () => {
  Post(getPosts());

  document.getElementById("addPosts").addEventListener("click", (e) => {
    e.preventDefault();
    const inputName = document.getElementById("nameInput");
    const inputText = document.getElementById("postInput");

    const newNameValue = inputName.value;
    const newTextValue = inputText.value;

    if (newNameValue && newTextValue) {
      addPosts(newNameValue, newTextValue);
      Post(getPosts());
      inputName.value = "";
      inputText.value = "";
    }
  });
});
