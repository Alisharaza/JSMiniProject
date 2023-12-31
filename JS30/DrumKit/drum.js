window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`div[data-key="${e.code}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  // setTimeout(() => {
  //   key.classList.remove("playing");
  // }, 100);
  setTimeout((a) => {
    audio.pause();
  }, 1000);
});
function removeTransition(e) {
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

//
