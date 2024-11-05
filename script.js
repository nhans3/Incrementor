// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.

// Math.floor(5.9) Doesnt round up. Gives 5.
// Math.ceil(2.03) Always round up. Gives 3.

// NUMBERS AREA
let counter = 0;
let minus50Btn = document.getElementById("minus50");
let minus10Btn = document.getElementById("minus10");
let minus1Btn = document.getElementById("minus1");

let plus50Btn = document.getElementById("plus50");
let plus10Btn = document.getElementById("plus10");
let plus1Btn = document.getElementById("plus1");

let displayEL = document.getElementById("display");

// ------------------------------------------------------------------------------------------------------
// STRING AREA
let story = "Once upon a time, ";

let stringInEl = document.getElementById("strIn");
let storyEl = document.getElementById("strOut");

// ------------------------------------------------------------------------------------------------------
// RANDOM NUMBERS AREA

let roundBtn1 = document.getElementById("rand1");
let roundBtn2 = document.getElementById("rand2");
let roundBtn3 = document.getElementById("rand3");
let roundBtn4 = document.getElementById("rand4");

let rand1Out = document.getElementById("rand1-out");
let rand2Out = document.getElementById("rand2-out");
let rand3Out = document.getElementById("rand3-out");
let rand4Out = document.getElementById("rand4-out");

// ------------------------------------------------------------------------------------------------------
// PICTURE, SIZE, COLOR & RESET BUTTONS
let picBtn = document.getElementById("pic-btn");
let picContainer = document.getElementById("pic-container");

let toyBtn = document.getElementById("toy-btn");
let toyContainer = document.getElementById("toy-container");

let sizeBtn = document.getElementById("random-size");
let rgbBtn = document.getElementById("random-rgb");
let resetBtn = document.getElementById("reset");

let body = document.getElementById("the-body");
let html = document.getElementById("HTML");

// Add Event Listener
// Can use variables in place of document.
minus50Btn.addEventListener("click", minus50fcn);
minus10Btn.addEventListener("click", minus10fcn);
minus1Btn.addEventListener("click", minus1fcn);

plus50Btn.addEventListener("click", plus50fcn);
plus10Btn.addEventListener("click", plus10fcn);
plus1Btn.addEventListener("click", plus1fcn);

stringInEl.addEventListener("change", updateStory);

roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);
roundBtn4.addEventListener("click", round4);

picBtn.addEventListener("click", addCandy);
toyBtn.addEventListener("click", addToy);
sizeBtn.addEventListener("click", changeSize);
rgbBtn.addEventListener("click", changeColor);
resetBtn.addEventListener("click", resetPage);

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

// Event Functions

// ------------------------------------------------------------------------------------------------------
// NUMBER FUNCTIONS

function minus50fcn() {
  // Update the value of the counter (JavaScript)
  counter = counter - 50;

  // Use counter to update the website (HTML)
  displayEL.innerHTML = counter;
}

function minus10fcn() {
  // Update Counter
  counter = counter - 10;
  // counter -= 10; also same.

  // Update Site
  displayEL.innerHTML = counter;
}

function minus1fcn() {
  counter = counter - 1;
  displayEL.innerHTML = counter;

  // counter = counter -1; or
  // counter -= 1; or
  // counter--;
}

function plus50fcn() {
  counter = counter + 50;
  displayEL.innerHTML = counter;
}

function plus10fcn() {
  counter = counter + 10;
  displayEL.innerHTML = counter;
}

function plus1fcn() {
  counter = counter + 1;
  displayEL.innerHTML = counter;
}

// ------------------------------------------------------------------------------------------------------
// STRING FUNCTIONS

function updateStory() {
  // Save the user's word to a variable
  let word = stringInEl.value;

  // Update the story variable (JS)                    ALGORITHM - Steps used. (Green comments)

  story += word + " ";
  console.log(story);

  // Clear the input field
  stringInEl.value = " ";

  // Update website to show story (HTML)
  strOut.innerHTML = story;
}

// ------------------------------------------------------------------------------------------------------
// RANDOM NUMBER FUNCTIONS

function round1() {
  // Create random decimal 0 - 1
  let rand = Math.random();

  // Round to 3 decimal places
  rand = rand.toFixed(3);
  console.log(rand);
  // Update site
  rand1Out.innerHTML = rand;
}

function round2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  rand2Out.innerHTML = rand;
}

function round3() {
  // -5 to 5
  // let rand = Math.random() * (5 - (-5)) + (-5)
  let rand = Math.random() * 10 - 5;
  rand = Math.round(rand);
  console.log(rand);

  rand3Out.innerHTML = rand;
}

// Random Number from x to y
// Math.random() * (y - x) + x

// E.g. If I want random number from 1 to 3
// let rand = Math.random() * (3 - 1) + 1
// rand = Math.round(rand);

function round4() {
  let randIn1 = +document.getElementById("rand-in1").value; //Recall: .value only works in function.
  let randIn2 = +document.getElementById("rand-in2").value;
  let rand = Math.random() * (randIn2 - randIn1) + randIn1;
  rand = Math.round(rand);
  console.log(rand);

  rand4Out.innerHTML = rand;
}

// ---------------------------------------------------------------------------------------------------------
// PICTURE, SIZE, COLOR & RESET FUNCTIONS

function addCandy() {
  // Every click, another candy appears to container.
  picContainer.innerHTML += "<img width = 50px src = 'img/kitkatcandy.webp'>";
}

function addToy() {
  // Every click, another candy appears to container.
  toyContainer.innerHTML += "<img width = 50px src = 'img/toyplush.jpg'>";
}

function changeSize() {
  size = Math.random() * 75;
  size = Math.round(size);
  size = size + "px";
  console.log(size);
  body.style.fontSize = size;
}

function changeColor() {
  r = Math.random() * 255;
  r = Math.round(r);

  g = Math.random() * 255;
  g = Math.round(g);

  b = Math.random() * 255;
  b = Math.round(b);

  rgb = "rgb(" + r + "," + g + "," + b + ")";

  html.style.background = rgb;
}

function resetPage() {
  html.style.background = "#9ae4c8";
  body.style.fontSize = "16px";
  displayEL.innerHTML = "0";
  counter = 0;
  stringInEl.innerHTML = " ";
  storyEl.innerHTML = "Once upon a time,";
  story = "Once upon a time, ";
  rand1Out.innerHTML = "----------";
  rand2Out.innerHTML = "----------";
  rand3Out.innerHTML = "----------";
  rand4Out.innerHTML = "----------";

  let randIn1 = document.getElementById("rand-in1");
  let randIn2 = document.getElementById("rand-in2");

  randIn1.value = " ";
  randIn2.value = " ";

  picContainer.innerHTML = " ";
  toyContainer.innerHTML = " ";
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

// 4. Math.random() is used to bring RNG (random number generator) to your applications.

// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString

// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.
// Not allowed to use window.location.reload (which simply refreshes the page)

// 5. Code reset button. This will reset all variables back to initial values and clear out all inputs.

// 6. Create a button that when pressed, add an image of your favourite toy to the website.
// Each click adds another toy.
