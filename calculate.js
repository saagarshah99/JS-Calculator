// TODO: convert to arrow functions

//global variables
let calculateInputText = document.getElementById("txtCalculator");
let firstNumber = 0;
let secondNumber = 0;
let runningTotal = 0;
let pendingOperation;

//receiving a number as input and adding to textbox
function receiveNumber(numberInput)
{
  event.preventDefault();
  // const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];

  calculateInputText.value += numberInput;
  removeStartingZero();
}

//numbers generally don't start with 0
function removeStartingZero()
{
  if(calculateInputText.value[0] == 0) {calculateInputText.value -= calculateInputText.value[0];}
}

//receiving a specified operation and marking it as pending
function receiveOperation(operationInput)
{
  event.preventDefault();
  
  firstNumber = parseFloat(calculateInputText.value);
  pendingOperation = operationInput;
  
  calculateInputText.value = "0";
  
  // TODO: 
  // if(pendingOperation != "." && calculateInputText.value[calculateInputText.value.length] != ".")
  // {
  //   calculateInputText.value = "0";
  // }
}

//performing the requested calculation by running through a series of switch cases
function whichOperation()
{
  secondNumber = parseFloat(calculateInputText.value);
  
  switch(pendingOperation)
  {
    case("+"):
      runningTotal = firstNumber + secondNumber;
      break;
    case("-"):
      runningTotal = firstNumber - secondNumber;
      break;
    case("*"):
      runningTotal = firstNumber * secondNumber;
      break;
    case("/"):
      runningTotal = firstNumber / secondNumber;
      break;
    case("root"):
      runningTotal = Math.sqrt(secondNumber);
      break;      
    case("%"):
      runningTotal = (firstNumber/100) * secondNumber;
      break;
    // case("."):
    //   calculateInputText.value += "."
    //   break;
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
  firstNumber = 0;
  secondNumber = 0;
}
resetCalculator();