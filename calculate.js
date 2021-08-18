/****************************MAIN CALCULATOR LOGIC*****************************/

//receiving a number as input and adding to textbox
let firstNumber; let secondNumber;
const receiveNumber = (numberInput) =>
{
  event.preventDefault();
  let calculateInputText = document.getElementById("txtCalculator");
  
  if(!firstNumber[1])
  {
    firstNumber[0] += String(numberInput);
    calculateInputText.value = String(firstNumber[0]);
  }
  else
  {
    secondNumber += String(numberInput);
    calculateInputText.value = String(secondNumber);
  }
  
  removeStartingZero();
}

//numbers generally don't start with 0
const removeStartingZero = () =>
{
  let calculateInputText = document.getElementById("txtCalculator");
  
  if(calculateInputText.value[0] == 0) 
  {
    calculateInputText.value -= calculateInputText.value[0];
  }
}

//receiving a specified operation and marking it as pending
let pendingOperation;
const receiveOperation = (operationInput) =>
{
  event.preventDefault();
  
  firstNumber[1] = true; //program knows to move on to second number
  
  pendingOperation = operationInput;  
  
  document.getElementById("txtCalculator").value = "0";
}

//running the final calculation by running through series of switch cases
const calculateSum = () =>
{
  event.preventDefault();
  let calculateInputText = document.getElementById("txtCalculator");

  firstNumber[0] = parseFloat(firstNumber[0]);
  secondNumber = parseFloat(calculateInputText.value);
  let runningTotal;
  
  switch(pendingOperation)
  {
    case("+"): runningTotal = firstNumber[0] + secondNumber; break;
    case("-"): runningTotal = firstNumber[0] - secondNumber; break;
    case("*"): runningTotal = firstNumber[0] * secondNumber; break;
    case("/"): runningTotal = firstNumber[0] / secondNumber; break;    
    case("%"): runningTotal = (firstNumber[0]/100) * secondNumber; break;
    case("sqrt"): runningTotal = Math.sqrt(secondNumber); break;
  }
  
  calculateInputText.value = runningTotal; //loading answer into textbox
  firstNumber[0] = runningTotal; secondNumber = 0;

  removeStartingZero();
}

//resetting current calculator to 0 (default state upon loading page)
const resetCalculator = () =>
{
  document.getElementById("txtCalculator").value = 0;
  pendingOperation = null;  
  firstNumber = [0, false]; secondNumber = 0;
}
resetCalculator();




/****************************KEYBOARD INPUT*****************************/

//handling keyboard input/shortcuts
document.addEventListener("keydown", function(event) 
{
  event.preventDefault();

  let whichButton;

  switch(event.code) 
  {
    //mathematical operation keys
    case "NumpadAdd": receiveOperation("+"); whichButton="plus"; break;
    case "Minus": case "NumpadSubtract": receiveOperation("-"); whichButton="minus"; break;
    case "NumpadMultiply": receiveOperation("*"); whichButton="multiply"; break;
    case "Slash": case "NumpadDivide": receiveOperation("/"); whichButton="divide"; break;
    case "KeyP": receiveOperation("%"); whichButton="percent"; break;
    case "KeyS": receiveOperation("sqrt"); whichButton="sqrt"; break;
    
    //regular number and number pad keys
    case "Digit0": case "Numpad0": receiveNumber(0); whichButton="0"; break;
    case "Digit1": case "Numpad1": receiveNumber(1); whichButton="1"; break;
    case "Digit2": case "Numpad2": receiveNumber(2); whichButton="2"; break;
    case "Digit3": case "Numpad3": receiveNumber(3); whichButton="3"; break;
    case "Digit4": case "Numpad4": receiveNumber(4); whichButton="4"; break;
    case "Digit5": case "Numpad5": receiveNumber(5); whichButton="5"; break;
    case "Digit6": case "Numpad6": receiveNumber(6); whichButton="6"; break;
    case "Digit7": case "Numpad7": receiveNumber(7); whichButton="7"; break;
    case "Digit8": case "Numpad8": receiveNumber(8); whichButton="8"; break;
    case "Digit9": case "Numpad9": receiveNumber(9); whichButton="9"; break;
    case "Period": case "NumpadDecimal": receiveNumber("."); whichButton="decimal"; break;
    
    //equals and both enter keys to get answer
    case "Equal": case "Enter": case "NumpadEnter": calculateSum(); whichButton="equals"; break;

    case "Escape": resetCalculator(); whichButton="reset"; break; //clear all input/output    
  }
  
  changeButtonColour(whichButton);
  
}, true);

//temporarily highlight button when keyboard input is detected
const changeButtonColour = (whichButton) =>
{
  const buttonStyle = document.getElementById("calculator__button-"+whichButton).style;
  
  buttonStyle.backgroundColor = "limegreen"; 
  buttonStyle.color = "white"; 
  buttonStyle.transition = "0.2s";

  setTimeout(function() {buttonStyle.backgroundColor = ""; buttonStyle.color = "";}, 200);
}