// modal 

const btn = document.getElementById('popup-btn');
const modal = document.getElementById('inquiry__modal-overlay');
const closeBtn = document.querySelector('.inquiry__modal-btn');
const prevBtn = document.querySelector(".prevbtn");

btn.onclick = function() {
  console.log("2");
  modal.style.display = "block";
}
closeBtn.onclick = function() {
  modal.style.display = "none";
}
prevBtn.onclick = function() {
  modal.style.display = "none";
}

