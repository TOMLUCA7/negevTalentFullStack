const posts = [
  { name: "tom", text: "hello world" },
  { name: "jj", text: "i love to run" },
];

export const getPosts = () => {
  return [...posts];
};

export const addPosts = (itemName, itemtext) => {
  posts.push({
    name: itemName,
    text: itemtext,
  });
};
