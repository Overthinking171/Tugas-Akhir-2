// const InputToogle = document.getElementById("data-toogle");
const data = document.getElementsByClassName("hamburger");
const nav = document.getElementsByClassName("data-ul");

function myFunction() {
  var checkBox = document.getElementById("data-toogle");
  var text = document.getElementById("data-ul");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
