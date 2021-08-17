// TODO: convert to arrow functions

//global variables
let calculateInputText = document.getElementById("txtCalculator");
let firstNumber = [0, false];
let secondNumber = 0;
let runningTotal = 0;
let pendingOperation;

//receiving a number as input and adding to textbox
function receiveNumber(numberInput)
{
  event.preventDefault();
  
  if(!firstNumber[1])
  {
    firstNumber[0] += String(numberInput);
    calculateInputText.value = String(firstNumber[0]);
  }
  else
  {
    secondNumber += numberInput;
    calculateInputText.value = String(secondNumber);
  }
  
  removeStartingZero();
}

//numbers generally don't start with 0
function removeStartingZero()
{
  if(calculateInputText.value[0] == 0) 
  {
    calculateInputText.value -= calculateInputText.value[0];
  }
}

//receiving a specified operation and marking it as pending
function receiveOperation(operationInput)
{
  event.preventDefault();
  
  firstNumber[1] = true; //so the program knows to move on to the next number
  
  pendingOperation = operationInput;
  
  calculateInputText.value = "0";
}

//performing the requested calculation by running through a series of switch cases
function whichOperation()
{
  firstNumber[0] = parseFloat(firstNumber[0]);
  secondNumber = parseFloat(calculateInputText.value);
  
  switch(pendingOperation)
  {
    case("+"): runningTotal = firstNumber[0] + secondNumber; break;
    case("-"): runningTotal = firstNumber[0] - secondNumber; break;
    case("*"): runningTotal = firstNumber[0] * secondNumber; break;
    case("/"): runningTotal = firstNumber[0] / secondNumber; break;
    case("%"): runningTotal = (firstNumber[0]/100) * secondNumber; break;
    case("root"): runningTotal = Math.sqrt(secondNumber); break;
  }
}

//running the final calculation and loading answer into textbox
function calculateSum()
{
  event.preventDefault();

  whichOperation();
  
  calculateInputText.value = runningTotal;
  removeStartingZero();
}

//resetting current calculator to 0 (default state upon loading page)
function resetCalculator()
{
  calculateInputText.value = 0;
  runningTotal = 0;
  
  firstNumber[0] = 0; firstNumber[1] = false;
  secondNumber = 0;
}
resetCalculator();