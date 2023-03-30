const button = document.getElementById("myButton");
const list = document.getElementById("myList");

button.addEventListener("click", () => {
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }