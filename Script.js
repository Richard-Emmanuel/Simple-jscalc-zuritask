// Getting the first number from the User
var firstNum =  parseFloat(prompt('Enter the first Number'))
;
// Selection of operation
var choiceOfAction = prompt('Enter operation: ( + ,  - , * ,  / ,)');

// Getting the Second number from the User
var secondNum =parseFloat( prompt('Enter the second Number'));

var result = 0;
if (isNaN(firstNum) || isNaN(secondNum)){
  alert ('wrong input try again');
}
else {
  if(choiceOfAction == '+'){
  result = firstNum + secondNum;
  }
  else if (choiceOfAction == '-'){
    result = firstNum - secondNum;
  }
  else if (choiceOfAction == '*'){
    result = firstNum * secondNum;
  }
  else if (choiceOfAction == '/'){
    result = firstNum / secondNum;
  }
  alert("The Result is " + result);
}