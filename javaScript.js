// DOM elements
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');  
let output = document.querySelector('.output');
const clearButton = document.querySelector('.clear');
const equalButton = document.getElementById('equalsKey');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const decimal = document.querySelector('.decimal');

currentOperand.textContent = '';
previousOperand.textContent = '';


//Create three variables for each of the parts of a calculator operatio

let number1 = '';
let storedNumber = '';
let operator = '';
let result = '';
let clickedOperator = '';


//  1.The basic math operators

function add(number1, number2) {

    return parseFloat (number1) + parseFloat (number2);
};


function subtract(number1, number2) {
	
    return parseFloat (number1) - parseFloat (number2);
};


 function multiply(number1, number2) {

   return parseFloat (number1) * parseFloat (number2);
};


function divide(number1, number2) {
    
    return parseFloat (number1) / parseFloat (number2);
};


// 3. Function that takes an operator and 2 numbers and then calls one of the above functions on the numbers
function operate (operator, number1, number2) {
  
    switch (operator) {
        case '+':
          return add(number1, number2);
          break;
        case '-':
          return subtract(number1, number2);
          break;
        case '*':
          return multiply(number1, number2);
          break;
        case '/':
          return divide(number1, number2);
      }
    }

 
// 4. Functions that populate the display when you click the number buttons


numberButton.forEach((number) => {
    number.addEventListener('click', function() {
      storedNumber += number.value;
      previousOperand.textContent = storedNumber; 
      
    })
  });
 
  operatorButton.forEach((operator => {
    operator.addEventListener('click', function() {   

      number1 = saveFirstNumber (storedNumber, result);
    
      // // get the operator that was clicked
      clickedOperator = operator.textContent;
      previousOperand.textContent =  number1 + clickedOperator;
     
      storedNumber = '';

      calculate();
     
    })
  }));

  
     // The function which allow you to do multiple operations

  function saveFirstNumber  (storedNumber, result, number) {

    if (result === '') {
        return storedNumber
      }else if (storedNumber === '') {
        return number.value 
      }else if (result === Infinity) {

return number.value
        // problem in this part (change it)
        
    }else {
         return result
    }
  }
  
//calculate

  function calculate () {
     result = operate(clickedOperator, number1, storedNumber);
     console.log(`${number1} ${clickedOperator} ${storedNumber} = ${result}`);
         
    function displayCurrentOperand (result) {
      if (storedNumber === '') {
          return currentOperand.textContent ='0'
      }else {
           return currentOperand.textContent = result
      }
    }
    displayCurrentOperand (result);
    
    console.log (displayCurrentOperand (result));
   
    //  previousOperand = roundNumber(previousOperand);
    }
  
  function roundNumber (num) {

    return Math.round (num * 1000 / 1000);
  }
    
    //Equal
    equalButton.addEventListener('click', function () {
      if (result != '' && number1 != '')
      calculate (); 
      else{
        currentOperand.textContent = number1.slice(0,5) + "...";
      }

      if ( result === Infinity) {

        return currentOperand.textContent = 'The calculator cannot divide by zero! Please press the button "Clear"!'
      }
    })


//Clear
    function clearAll(){
      output.textContent = '';
      number1 = '';
      clickedOperator='';
      storedNumber='';
      currentOperand.textContent = '0';
      previousOperand.textContent = '';
      result = '';
      
  }

  clearButton.addEventListener ('click', clearAll); 


//Decimal
function addDecimal() {
if (!storedNumber.includes(".")) {

  storedNumber += '.';
}

}

decimal.addEventListener ('click', function () {

  addDecimal();
}); 
  