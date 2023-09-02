const inputs = document.querySelectorAll(".control input");
function handleUpdate() {
  const suffix = this.getAttribute("data-sizing") || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  console.log(this.value);
}
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
function applyFilterAndDownload() {
  let img = document.getElementById("myImage");
  img.style.filter = "blur(5px)";
  let canva = document.getElementById("canvas");
  let ctx = canva.getContext("2d");
  canva.width = img.width;
  canva.height = img.height;
  ctx.filter = img.style.filter;
  ctx.drawImage(img, 0, 0);
  let url = canva.toDataURL();
  let link = document.createElement("a");
  link.href = url;
  link.download = "filtered_image.png";
  link.click();
}

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function (button) {
  button.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
