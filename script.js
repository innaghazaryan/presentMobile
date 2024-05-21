const newPoem = document.querySelector(".newP");
const always = document.querySelector(".always");
const mher = document.querySelector(".mher");
const poetry1 = document.querySelector(".poetry1");
const poetry2 = document.querySelector(".poetry2");
const poetry3 = document.querySelector(".poetry3");
newPoem.addEventListener("click", () => {
  poetry1.classList.remove("none");
  poetry2.classList.add("none");
  poetry3.classList.add("none");
});
always.addEventListener("click", () => {
  poetry1.classList.add("none");
  poetry2.classList.remove("none");
  poetry3.classList.add("none");
});
mher.addEventListener("click", () => {
  poetry1.classList.add("none");
  poetry2.classList.add("none");
  poetry3.classList.remove("none");
});
