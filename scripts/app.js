//get the box elements id
let box1 = document.getElementById("box-1");
let box2 = document.getElementById("box-2");
let box3 = document.getElementById("box-3");
let box4 = document.getElementById("box-4");
let box5 = document.getElementById("box-5");
let box6 = document.getElementById("box-6");
let box7 = document.getElementById("box-7");
let box8 = document.getElementById("box-8");

//get the input fields id
let boxNumberInput = document.getElementById("box-number-input");
let boxNum = parseInt(boxNumberInput.value);
let boxColorInput = document.getElementById("box-Color-Input");
let colors = ["red", "blue", "purple", "brown", "yellow"];

//Get the button ID
let changeColorBTN = document.getElementById("changeColorBTN");
let resetBTN = document.getElementById("resetBTN");

//add a event listener to button change color
changeColorBTN.addEventListener("click", function () {
  let boxNum = parseInt(boxNumberInput.value);
  
  switch (boxNum) {
    case 1:
      box1.style.backgroundColor = boxColorInput.value.toLowerCase();
      break;
    case 2:
      box2.style.backgroundColor = boxColorInput.value.toLowerCase();
      break;
    case 3:
      box3.style.backgroundColor = boxColorInput.value.toLowerCase();
      break;
    case 4:
      box4.style.backgroundColor = boxColorInput.value.toLowerCase();
      break;
    case 5:
      box5.style.backgroundColor = boxColorInput.value.toLowerCase();
      break;
    case 6:
      box6.style.backgroundColor = boxColorInput.value.toLowerCase();
      break;
    case 7:
      box7.style.backgroundColor = boxColorInput.value.toLowerCase();
      break;
    case 8:
      box8.style.backgroundColor = boxColorInput.value.toLowerCase();
      break;
    default:
      if (boxNum < 0 || boxNum > 8) {
        alert("Please enter numbers 1-8");
      }
      break;
  }
});
resetBTN.addEventListener("click", function () {
 
});
