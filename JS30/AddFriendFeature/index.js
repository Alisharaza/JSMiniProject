let stranger = document.querySelector("h5");
let btn = document.querySelector("#add");
let card = document.querySelector(".card");
let love = document.querySelector("ion-icon");
let main = document.querySelector(".main");

let cursor = document.querySelector(".cursor");
let flag = 0;
btn.addEventListener("click", () => {
  if (flag == 0) {
    stranger.innerHTML = "Friends";
    stranger.style.color = "green";
    btn.innerHTML = "Remove friend";
    flag = 1;
  } else {
    stranger.innerHTML = "Stranger";
    stranger.style.color = "red";
    btn.innerHTML = "Add friend";
    flag = 0;
  }
});
card.addEventListener("dblclick", () => {
  love.style.transform = "translate(-50%, -50%) scale(1)";
  love.style.opacity = 0.8;
  setTimeout(() => {
    love.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});
main.addEventListener("mousemove", (e) => {
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
});
