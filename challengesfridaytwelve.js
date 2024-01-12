// challange 1 - Create program storing what you ate for breakfast,lunch and dinner

const meals = {
    breakfast: "egg, sausage omelette" ,
    lunch: "rice with chicken",
    dinner: "beef burger with chips"
};
console.log('Today\'s Meals:');
console.log('Breakfast: egg, sausage omelette');
console.log('Lunch: rice with chicken');
console.log('Dinner: beef burger with chips');


// challange 2 - Pass in 2 parameter called num for fizz,nuzz and fizzbuzz

const fizzBuzz = (num) => {
if (typeof num !== 'number' || num <= 0) { 
 return 'needs to be a positive number';
} else if (num % 3 === 0 && num % 5 === 0) {
return 'fizz buzz';
} else if (num % 3 === 0) {
return 'fizz';
} else if (num % 5 === 0) {
return 'buzz';
} else {
return num;
}    
};
console.log(fizzBuzz(6));     
console.log(fizzBuzz(10));    
console.log(fizzBuzz(15));   
    
      

// challange 3 - Pass 2 parameters called num1 & numb2

const processNumbers = (num1, num2) => {
if (typeof num1 !== 'number' || typeof num2 !== 'number') {
return 'make sure you enter 2 numbers'; }
const sum = num1 + num2;
if (sum % 2 === 0) { return sum;
} else {
return num1 * num2;
}
};
console.log(processNumbers(2, 3));         
console.log(processNumbers(5, 7));       
console.log(processNumbers(6, 10));    
console.log(processNumbers(8,4 )); 


// challange 4 - Generate six random numbers between one to fifty 

const generateRandomNumbers = () => {
const randomNumbers = [];
for (let i = 0; i < 6; i++) {
const randomNumber = Math.floor(Math.random() * 50) + 1;
randomNumbers.push(randomNumber);
} return randomNumbers; };

const randomNumbersArray= generateRandomNumbers();
console.log(randomNumbersArray);

// challange 5 - Create a loop to count from zero to nine the nine to zero 

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const countDownArray = () => { const resultArray = [] ;
    for (let i = 9; i >= 0; i--) { resultArray.push(i); }
    return resultArray; };
    const countdown = countDownArray(); console.log(countdown);{}