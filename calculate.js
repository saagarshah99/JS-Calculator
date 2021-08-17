// TODO: convert to arrow functions

//global variables
let firstNumber = []; let secondNumber;
let pendingOperation; let runningTotal;



//receiving a number as input and adding to textbox
function receiveNumber(numberInput)
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
    secondNumber += numberInput;
    calculateInputText.value = String(secondNumber);
  }
  
  removeStartingZero();
}

//numbers generally don't start with 0
function removeStartingZero()
{
  let calculateInputText = document.getElementById("txtCalculator");
  
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
  
  document.getElementById("txtCalculator").value = "0";
}

//running the final calculation and loading answer into textbox
function calculateSum()
{
  event.preventDefault();

  whichOperation();  
  
  document.getElementById("txtCalculator").value = runningTotal;
  removeStartingZero();
}

//resetting current calculator to 0 (default state upon loading page)
function resetCalculator()
{
  document.getElementById("txtCalculator").value = 0;
  runningTotal = 0;
  
  firstNumber[0] = 0; firstNumber[1] = false;
  secondNumber = 0;
}
resetCalculator();



//performing the requested calculation by running through a series of switch cases
function whichOperation()
{
  firstNumber[0] = parseFloat(firstNumber[0]);
  secondNumber = parseFloat(document.getElementById("txtCalculator").value);
  
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