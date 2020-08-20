var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//random number generator

function RandomNumber() {
  var rand = Math.floor(Math.random() * digits.length);
  return rand;
}

//to generate 6 digit hex code

function hexCodeGeneretor() {
  var hexCode = "#";
  for (var i = 0; i < 6; i++) {
    var number = RandomNumber();
    hexCode = hexCode + digits[number];
  }
  return hexCode;
}

//event listener
var hex = document.querySelector("button");
var bodyColor = document.querySelector("body");
var span = document.querySelector("span");
hex.addEventListener("click", function () {
  var colors = hexCodeGeneretor();
  bodyColor.style.backgroundColor = colors.toString();
  span.innerHTML = colors;
  span.style.color = colors.toString();
});
