// const api = "https://official-joke-api.appspot.com/random_joke";

// const joke = () => {
//   fetch(api)
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(data)
//       const joke = document.getElementById("joke");
//       joke.textContent = `${data.setup}  punchline => ${data.punchline}`;
//     });
// };

// 1
const Book_api = "https://www.googleapis.com/books/v1/volumes?q=";

const renderBook = (isbn) => {
  //   console.log(isbn);
  axios
    .get(Book_api + "isbn:" + isbn)
    .then((response) => {
      console.log(response.data.items[0]);
      const book = document.getElementById("book");
      book.textContent =
        response.data.items[0].volumeInfo.title +
        " by: " +
        response.data.items[0].volumeInfo.authors[0];
    })
    .catch((error) => {
      console.log(error);
    });
};

// 2
const renderBookByTitle = (queryType, queryValue) => {
  axios
    .get(Book_api + queryType + ":" + queryValue)
    .then((response) => {
      console.log(response.data.items[0].volumeInfo.title);
      const book = document.getElementById("bookByTitle");
      book.textContent = response.data.items[0].volumeInfo.title;
    })
    .catch((error) => {
      console.log(error);
    });
};
