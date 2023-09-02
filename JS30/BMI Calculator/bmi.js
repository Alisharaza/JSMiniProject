const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height-bmi").value);
  const weight = parseInt(document.querySelector("#weight-bmi").value);
  const res = document.querySelector("#res");
  if (height === "" || height < 0 || isNaN(height)) {
    res.innerHTML = `please give valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    res.innerHTML = `please give valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    res.innerHTML = `<span>${bmi}</span>`;
  }
});
