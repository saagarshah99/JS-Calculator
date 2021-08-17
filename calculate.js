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
    case("root"): runningTotal = Math.sqrt(secondNumber); break;
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

// TODO: temporarily highlight button as if it was clicked using mouse
window.addEventListener("keydown", function(event) 
{
  event.preventDefault();

  switch(event.code) {
    // case "ShiftLeft": //TODO: handle key combinations with shift key

    //mathematical operation keys
    case "NumpadAdd": receiveOperation("+"); break;
    case "Minus": case "NumpadSubtract": receiveOperation("-"); break;
    case "NumpadMultiply": receiveOperation("*"); break;
    case "Slash": case "NumpadDivide": receiveOperation("/"); break;
    
    //regular number and number pad keys
    case "Digit0": case "Numpad0": receiveNumber(0); break;
    case "Digit1": case "Numpad1": receiveNumber(1); break;
    case "Digit2": case "Numpad2": receiveNumber(2); break;
    case "Digit3": case "Numpad3": receiveNumber(3); break;
    case "Digit4": case "Numpad4": receiveNumber(4); break;
    case "Digit5": case "Numpad5": receiveNumber(5); break;
    case "Digit6": case "Numpad6": receiveNumber(6); break;
    case "Digit7": case "Numpad7": receiveNumber(7); break;
    case "Digit8": case "Numpad8": receiveNumber(8); break;
    case "Digit9": case "Numpad9": receiveNumber(9); break;
    case "Period": case "NumpadDecimal": receiveNumber("."); break;
    
    //equals and both enter keys to get answer
    case "Equal": case "Enter": case "NumpadEnter": calculateSum(); break;

    case "Escape": resetCalculator(); break; //clear all input/output    
  }

}, true);