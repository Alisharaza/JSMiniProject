/*Q: On clicking the button append hello to the page*/
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function (e) {
//   let divElem = document.createElement("div");
//   divElem.innerHTML = "Hello!!";
//   let body = document.querySelector("body");
//   body.appendChild(divElem);
// });

/*Q: Add 2 in list*/
// const ulList = document.querySelector("ul");
// const allList = document.querySelectorAll("li");
// let threeElemAsReference = allList[1];
// let twoElem = document.createElement("li");
// twoElem.innerText = "2";
// ulList.insertBefore(twoElem, threeElemAsReference);
/*Q: write a script fetch the data color attribute of a card on double-clicking
on them and attaches the fetched class to that card 
and also changes the datacolor attribute to used*/

let allCard = document.querySelectorAll(".card");
allCard.forEach((card) => {
  //for every card
  card.addEventListener("dblclick", (e) => {
    //double click k lye event loistener
    let dataColor = card.getAttribute("data-color"); //each card k attribute=>datacolor ko get krna
    card.classList.add(dataColor); //card k datacolor ko classlist me add krna
    card.setAttribute("data-color", "used"); //used krenge
  });
});

//Q: filter the movie

// let select = document.querySelector(".select");
// let allMovie = document.querySelectorAll(".movies");
// select.addEventListener("change", function (x) {
//   let selectVal = this.value;
//   console.log(this);
//   if (selectVal === "all") {
//     //Display all
//     allMovie.forEach((movie) => {
//       movie.style.display = "block";
//     });
//   } else {
//     allMovie.forEach((movie) => {
//       if (selectVal === movie.dataset.category) {
//         movie.style.display = "block";
//       } else {
//         movie.style.display = "none";
//       }
//     });
//   }
// });

// Q:Create a generic function to select all sibling of a given npode. using that function delete all sibling of red card.

let redElemNode = document.querySelector(".red");
let allCar = document.querySelectorAll(".card");
// deleteAllSibling(redElemNode);
// function deleteAllSibling(redElem) {
//   let before = redElem.previousElementSibling;
//   let after = redElem.nextElementSibling;
//   while (before) {
//     before.remove();
//     before = redElem.previousElementSibling;
//   }
//   while (after) {
//     after.remove();
//     after = redElem.nextElementSibling;
//   }
// }

allCar.forEach((card) => {
  if (card !== redElemNode) {
    card.remove();
  }
});

/*===Q: Jail the mouse========*/
let cell = document.querySelector(".cell");
cell.addEventListener("mouseenter", (e) => {
  cell.style.backgroundImage = "url('./j.jpg')";
});
cell.addEventListener("mouseleave", (e) => {
  cell.style.backgroundImage = "none";
});

/*Browser-Events:3 paramenters
    1)Events phases
    2)Properties
    3)Propagation stop
  Event-phases:3 parameters
    1)Capturing
    2)Target
    3)Bubbling
  Event-properties:-3 parameters
    1)Target:elemnts which triggr the event
    2)currentTarget:elemnts on which listener is attached
  propagation
    1)stop propagation():Bubbling phase ko prevent krne k lye iska use hota hai
    2)stop Immediate propagation():more than one lisener ho skta hai elment me to in listener-sibling ko chalne nii dega 
  Event-Phases:
    0-none
    1-capturing
    2-Target
    3-Bubbling

*/

/*========Q:stop propagation Bubbling========*/
let orange = document.querySelector(".orange");
let blue = document.querySelector(".blue");
let yellow = document.querySelector(".yellow");
orange.addEventListener(
  "click",
  (e) => {
    console.log("orange");
    // e.stopPropagation();
  },
  true
);
blue.addEventListener(
  "click",
  (e) => {
    console.log("blue");
  },
  true
);
yellow.addEventListener(
  "click",
  (e) => {
    console.log("yellow");
    //e.stopPropagation();
  },
  true
);
/*========Q: target or current target Q:The following coe is broken even when blue,its alerted that pink is clicked========*/
let pink = document.querySelector(".pink");
pink.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    alert("pink");
  }
});
/*========Sizes and Scrolling Q:The following coe is broken even when blue,its alerted that pink is clicked========*/
let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
document.documentElement.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key === "1") {
    s1.scrollIntoView();
  } else if (key === "2") {
    s2.scrollIntoView();
  } else if (key === "t") {
    window.scrollTo(0, 0);
  } else if (key === "b") {
    let body = document.querySelector("body");
    let dimension = body.getBoundingClientRect();
    window.scrollTo(0, dimension.height);
  }
});
/*===Q: Write a script to do the following mouse leaving from a card(say A)and entering another
card(say B).Destroy the card A by making its border and in its place make another card with 
solid border which is not card A (say card C)and it should be dashed before ====*/
let allcard = document.querySelector("card");
let preCard;
allcard.forEach((card) => {
  card.addEventListener("mouseleave", (e) => {
    preCard = e.currentTarget;
  });
  card.addEventListener("mouseenter", (e) => {
    if (!preCard) return;
    preCard.classList.remove("card-solid");
    allCard.forEach((eachCard) => {
      if (eachCard !== preCard) {
        eachCard.classList.add("card-solid");
      }
    });
  });
});
