function addItem() {
  const input = document.getElementById("itemInput");
  const list = document.getElementById("shoppingList");

  const value = input.value.trim();

  if (value === "") return;

  const li = document.createElement("li");
  li.textContent = value;

  list.appendChild(li);

  input.value = "";
}
