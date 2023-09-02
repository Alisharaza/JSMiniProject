const endDate = new Date("18-Aug-2023");
document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input");
function clock() {
  const end = new Date(endDate);
  const now = new Date(); //ms deta hai
  const diff = (end - now) / 1000;
  //   Convert in to days
  if (diff < 0) {
    return;
  }
  input[0].value = Math.abs(Math.floor(diff / 3600 / 24));
  input[1].value = Math.abs(Math.floor((diff / 3600) % 24));
  input[2].value = Math.abs(Math.floor((diff / 60) % 60));
  input[3].value = Math.abs(Math.floor(diff) % 60);
}
clock();
setInterval(() => {
  clock();
}, 1000);

/*
1 day=24 hrs
1 hr=60 min
60 min=3600 sec
*/
