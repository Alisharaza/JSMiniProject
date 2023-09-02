let elements = document.querySelectorAll(".elem");
let image = document.querySelectorAll(".elem img");
elements.forEach((elem) => {
  console.log(elem);
  elem.addEventListener("mousemove", (e) => {
    e.currentTarget.lastElementChild.style.left = e.x + "px";
    // e.target.lastElementChild.style.top = e.y + "px";
  });
  elem.addEventListener("mouseenter", (e) => {
    e.target.lastElementChild.style.opacity = 1;
  });
  elem.addEventListener("mouseleave", (e) => {
    e.target.lastElementChild.style.opacity = 0;
  });
});
