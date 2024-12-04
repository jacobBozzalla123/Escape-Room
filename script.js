// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
i1 = document.getElementById("monster");
i2 = document.getElementById("cipher");
i3 = document.getElementById("note");
i4 = document.getElementById("text");
i5 = document.getElementById("subciph");
i6 = document.getElementById("subciph2");
i7 = document.getElementById("phrase");
t1 = document.getElementById("answer1");
d1 = document.getElementById("door1");
d2 = document.getElementById("door2");

function exit() {
  window.location.href = "https://dyrxck.csb.app/";
}
window.onload = function () {
  startModal();
};

function startModal() {
  const introModal = document.getElementById("intro");
  introModal.style.display = "flex";
}
function hideStartModal() {
  document.getElementById("intro").style.display = "none";
  hideModal2();
}
function cipher() {
  i2.classList.remove("hide");
  i2.classList.add("clickable");
  document.getElementById("desk2").classList.remove("clickable");
}
function note() {
  i3.classList.remove("hide");
  document.getElementById("desk").classList.remove("clickable");
}
function board() {
  i4.classList.remove("hide");
  document.getElementById("board").classList.remove("clickable");
}
function showModal() {
  document.getElementById("myModal").style.display = "flex";
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
}
function showModal2() {
  document.getElementById("myModal2").style.display = "flex";
}

function hideModal2() {
  document.getElementById("myModal2").style.display = "none";
}
function showModal3() {
  document.getElementById("myModal3").style.display = "flex";
  document.getElementById("scare").pause();
}

console.log("JavaScript operational"); // run on startup to make sure JS is working
var input_div = document.getElementById("answer1");
console.log("JavaScript operational"); // run on startup to make sure JS is working
var input_div = document.getElementById("answer2");

function checkInput() {
  console.log(input_div.value);
  console.log("rightinput");
  if (
    document.getElementById("answer1").value == "CLINT" ||
    document.getElementById("answer1").value == "Clint" ||
    document.getElementById("answer1").value == "clint"
  ) {
    i5.classList.remove("opaque2");
    i6.classList.remove("opaque2");
    i7.classList.remove("opaque2");
    document.getElementById("answer1").style.display = "none";
    document.getElementById("Submit").style.display = "none";
    document.getElementById("answer2").classList.remove("opaque2");
    document.getElementById("Submit2").classList.remove("opaque2");
  }
  input_div.value = "";
}
function checkInput2() {
  console.log(input_div.value);
  console.log("rightinput");
  if (
    document.getElementById("answer2").value == "GetOutFast" ||
    document.getElementById("answer2").value == "getoutfast" ||
    document.getElementById("answer2").value == "GETOUTFAST" ||
    document.getElementById("answer2").value == "Getoutfast" ||
    document.getElementById("answer2").value == "Get out fast" ||
    document.getElementById("answer2").value == "Get Out Fast" ||
    document.getElementById("answer2").value == "get out fast" ||
    document.getElementById("answer2").value == "GET OUT FAST"
  ) {
    document.getElementById("answer2").style.display = "none";
    document.getElementById("Submit2").style.display = "none";
    document.getElementById("door1").style.display = "none";
    document.getElementById("door2").classList.remove("hide");
    document.getElementById("scare").play();
    hideModal2();
    i1.classList.remove("hide");
  }
  input_div.value = "";
}
