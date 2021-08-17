// TODO: convert to arrow functions

//TODO: potentially use session storage to maintain this information, reset function would clear the data in there
let pendingOperation; 

//receiving a number as input and adding to textbox
let firstNumber = []; let secondNumber;
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
  
  firstNumber[1] = true; //program knows to move on to second number
  
  pendingOperation = operationInput;  
  
  document.getElementById("txtCalculator").value = "0";
}

//running the final calculation by running through series of switch cases
function calculateSum()
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
function resetCalculator()
{
  document.getElementById("txtCalculator").value = 0;
  pendingOperation = null;
  
  firstNumber[0] = 0; firstNumber[1] = false;
  secondNumber = 0;
}
resetCalculator();