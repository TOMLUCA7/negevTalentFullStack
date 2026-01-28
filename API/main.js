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

// 3
const returnAllBooks = (queryType, queryValue) => {
  axios
    .get(Book_api + queryType + ":" + queryValue)
    .then((response) => {
      console.log(response.data.items);
      const book = document.getElementById("allBooks");
      for (let i = 0; i < response.data.items.length; i++) {
        book.textContent += `${response.data.items[i].volumeInfo.title} || `;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// 4
const GIPHY_API_URL =
  "https://api.giphy.com/v1/gifs/search?api_key=" +
  process.env.GIPHY_API +
  "&q=";

const renderGif = (input) => {
  axios
    .get(GIPHY_API_URL + input)
    .then((response) => {
      console.log(response.data);
      if (response.data.data && response.data.data.length > 0) {
        const gif = document.getElementById("gif");
        gif.src = response.data.data[0].images.original.url;
      } else {
        console.log("No GIF found");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// https://api.giphy.com/v1/gifs/search?api_key=pjgJMzGZ8CVGVwenhxWQZ7rj4mG1sUPE&q=
