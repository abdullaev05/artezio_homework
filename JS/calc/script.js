const sum = document.getElementById('sum');
const run = document.getElementById('run');
const clearAll = document.getElementById('clear');
const primeNumbers = document.getElementById('primeNum');
const result = document.getElementById('result');

function getInputs(){
  let x1 = document.getElementById('x1').value;
  let x2 = document.getElementById('x2').value;
  if(x1 == "" || x2 ==""){ //task 2.2
   alert('x1 or x2 empty'); //task 2.2
  } //task 2.2
  else{ 
   if(isNaN(x1) || isNaN(x2)) {
    alert('one of the numbers is NaN');
   }
   else{
    return {x1 : parseInt(x1), x2 : parseInt(x2)};
   }
  } 
}

function sumFunc(){
  let { x1 , x2 } = getInputs();
  result.value = x1 + x2;
}

sum.addEventListener('click', sumFunc); //task 2.3
  
function sumOfRangeFunc(){ //task 2.3
  let { x1 , x2 } = getInputs(); //task 2.3
  let res = 0; //task 2.3
   while(x1 < (x2 + 1)){ //task 2.3
    res += x1; //task 2.3
    x1++; //task 2.3
   }     //task 2.3
   result.value = res; //task 2.3
} //task 2.3

function productOfRangeFunc(){ //task 2.5
  let { x1 , x2 } = getInputs(); //task 2.5
  let res = 1; //task 2.5
   while(x1 < (x2 + 1)){ //task 2.5
    res *= x1; //task 2.5
     x1++; //task 2.5
    } //task 2.5    
    result.value = res; //task 2.5
} //task 2.5

function primeNumbersFunc(){ //task 2.7
  let { x1 , x2 } = getInputs(); //task 2.7
  let primeNumbersList = []; //task 2.7
  nextPrime: //task 2.7
  for(let i = x1; i <= x2; i++){ //task 2.7
    for(let j = x1; j < i; j++){ //task 2.7
      if (i % j == 0){    //task 2.7
        continue nextPrime; //task 2.7
      }   //task 2.7
    }    //task 2.7
    (i !== 1)?primeNumbersList.push(i):false; //task 2.7
    result.value = primeNumbersList;   //task 2.7
  } //task 2.7
} //task 2.7

primeNumbers.addEventListener('click', primeNumbersFunc); //task 2.7

function clearAllFunc(){ //task 2.4
  x1.value = ""; //task 2.4
  x2.value = ""; //task 2.4
  result.value = ""; //task 2.4
} //task 2.4

clearAll.addEventListener('click', clearAllFunc); //task 2.4

run.addEventListener('click', () => { //task 2.5
  let radio = document.getElementsByName('operation'); //task 2.5
  for (let i = 0; i < radio.length; i++){ //task 2.5
    if(radio[i].checked && radio[i].value == 'sum' ){ //task 2.5
      return sumOfRangeFunc(); //task 2.5
    } //task 2.5
    else if(radio[i].checked && radio[i].value == 'product' ){ //task 2.5
      return productOfRangeFunc(); //task 2.5
    } //task 2.5
  } //task 2.5
}); //task 2.5
