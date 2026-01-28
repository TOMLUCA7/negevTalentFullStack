const api = "https://official-joke-api.appspot.com/random_joke";

const joke = () => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      const joke = document.getElementById("joke");
      joke.textContent = `${data.setup}  punchline => ${data.punchline}`;
    });
};
