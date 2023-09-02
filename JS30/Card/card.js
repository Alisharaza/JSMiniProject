const cardContainer = document.querySelector(".container");
async function fetchData() {
  const response = await fetch("https://fakestoreapi.com/products"); //json format
  const data = await response.json(); //json format se java script object bna rhe hai
  // console.log(data);
  render(data);
}
fetchData();
function render(productList) {
  productList.forEach((product) => {
    const {
      id,
      title,
      rating: { rate },
      price,
      image,
    } = product;
    const card = document.createElement("div");
    // add class into classlist of card
    card.classList.add("card");
    // add id of card
    // card.id=id;

    card.innerHTML = `
    <div class="card-img">
        <img
        src=${image}
        alt=${title}
        />
    </div>
    <div class="card-body">
    <h2>${title}</h2>
        <p>${rate}</p>
    </div>
    <div class="card-footer">
        <h3>&#x20b9; ${price}</h3>
        <button class="card-btn">Add</button>
    </div>
    `;
    cardContainer.appendChild(card);
    const btn = card.querySelector(".card-btn");
    let cnt = 0;

    btn.addEventListener("click", (e) => {
      if (btn.textContent === "Add") {
        cnt++;
      }
      btn.innerHTML = `
            <ion-icon name="remove-outline" class='minus btn'></ion-icon>
            <span class="cnt">${cnt}</span>
            <ion-icon name="add-outline"  class='plus btn'></ion-icon>
        `;

      if (cnt <= 0) {
        btn.innerHTML = "Add";
      }

      if (e.target.classList.contains("plus")) {
        cnt++;
      } else if (e.target.classList.contains("minus")) {
        cnt--;
      }
    });
  });
}
