const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function range(start, end) {
  return Array.apply(0, Array(end - 1))
    .map((element, index) => index + start);
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function boyStyles() {
  // var r = random(0);
  var r = 0;
  // var g = random(0);
  var g = 0;
  // var b = random(255);
  var b = 255;
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function girlStyles() {
  // var r = randomInteger(240,255);
  var r = 253;
  var g = 0
  // var b = randomInteger(50,192);
  var b = 219;
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

// function getRandomStyles() {
//   var r = random(0);
//   var g = random(0);
//   var b = random(255);
//   var mt = random(200);
//   var ml = random(50);
//   var dur = random(5) + 5;
//   return `
//   background-color: rgba(${r},${g},${b},0.7);
//   color: rgba(${r},${g},${b},0.7); 
//   box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
//   margin: ${mt}px 0 0 ${ml}px;
//   animation: float ${dur}s ease-in infinite
//   `;
// }

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    // balloon.style.cssText = getRandomStyles();
    if(baby.sex == 'female'){
      balloon.style.cssText = girlStyles();
    }else{
        balloon.style.cssText = boyStyles();
    }
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove()
  }, 500)
}

// window.addEventListener("load", () => {
//   createBalloons(30)
// });

// window.addEventListener("click", () => {
//   removeBalloons();
// });
