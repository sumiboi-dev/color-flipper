var colors = ["Green", "#F15025", "#6f4a8e", "Red", "#cd5c5c"];

var body = document.querySelector("body");
var span = document.querySelector("span");

// generating random number to select color from array
function randNumber() {
  var colorChooser = Math.floor(Math.random() * 5);
  return colorChooser;
}

//event listner for button

document.querySelector("button").addEventListener("click", function () {
  var rand = randNumber();
  body.style.backgroundColor = colors[rand];
  span.innerHTML = colors[rand];
  span.style.color = colors[rand];
});

//event listener for simple tag

// document.querySelector(".a1").addEventListener("click", function () {
// document.querySelector("body").style.backgroundColor = "#e0ece4";
// document.querySelector("span").innerHTML = "#e0ece4";
// document.querySelector("span").style.color = "#e0ece4";
// });
