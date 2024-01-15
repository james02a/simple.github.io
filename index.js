/** 
let count =0;

document.getElementById("increaseBtn").onclick = function(){
    count +=1;
    document.getElementById("counterLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function(){
    count =0;
    document.getElementById("counterLabel").innerHTML = count;
}
document.getElementById("decreaseBtn").onclick = function(){
    count -=1;
    document.getElementById("counterLabel").innerHTML = count;
}
//next code session
let x;
document.getElementById("roll").onclick =function(){
    x=document.getElementById("text1").value
    document.getElementById("label1").innerHTML = "Hi" + " " + x;

}

let checkbox;
document.getElementById("myButton").onclick =function(){

checkbox = document.getElementById("myCheckbox")
   if(checkbox.checked){

  alert("you subscribed")

   }
   else{
    document.getElementById("labell").innerHTML = "you did not subscribed"
   }


} 
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");

document.getElementById("mop").onclick =function(){
    if(visa.checked){
        alert("you are paying with visa")

    }else if(mastercard.checked){

        alert("you are paying with mastercard")
    }else if(paypal.checked){

        alert("you are paying with paypal")
    }else {
        alert("you must select a Methop of payment")
    }
    
 
}
**/
/** 
for(let i = 1; i<=100; i++){
    if(i % 3 ==0 && i % 5 == 0){
        console.log("hello Fizz Fuzz")
    } else if(i % 3 == 0){
        console.log("hello Fizz ")

        
    }else if(i % 5 == 0){
        console.log("hello fuzz ")

        
    }
    console.log(i)
}
*/

//function
/**
function happyBirthday(username, age){  //parameters
    console.log("happy birthday", username, age);

}
happyBirthday("james", 15); //arguments 
 */
// Declare variables
/** 
let area;
let width;
let height;

// Prompt the user for input and store in width and height
width = window.prompt("Enter width");
height = window.prompt("Enter height");

// Call the getarea function and store the result in the 'area' variable
area = getArea(width, height);

// Display the calculated area in the console
console.log("The area is", area);

// Define the getArea function
function getArea(width, height) {
    // Calculate the area by multiplying width and height
    let result = width * height;
    // Return the calculated result
    return result;
}
*/
/**
 * let area1;
let radius;
radius = window.prompt("enter radius");
area1 = getarea1(radius);
console.log("the area is", area1);


function getarea1(radius){
    let result = Math.PI * Math.pow(radius,2);
    return result;
}

 * 
 * 
 */




/**
 * 
 
let num1;
let num2;
let num3;
let average;

num1 = window.prompt("enter number 1");
num1= Number(num1);
num2 = window.prompt("enter number 2");
num2= Number(num2);
num3 = window.prompt("enter number 3");
num3= Number(num3);
average = calculateAverage(num1,num2,num3);

console.log(average)

function calculateAverage(num1,num2,num3){
    let result =( num1 + num2 + num3) / 3;

    return result;

}
*/
/**
============================================================
let number;
let checker;

number = window.prompt("enter a number");
checker = checkerEvenOdd(number);

console.log(checker);

function checkerEvenOdd(number){
    if(number % 2 == 0){
        console.log("you entered an even number");
    }else{
        console.log("you entered odd numbers")
    }
}

========================================================
 */
/**let num1;
let num2;
let num3;
let max;



num1 = window.prompt("enter number 1");
num2 = window.prompt("enter number 2");
num3 = window.prompt("enter number 3");

max = findMax(num1, num2, num3);

console.log('the max number is $[max]');

function findMax(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
       return num1;
    } else if (num2> num1 && num2 > num3){
        return num2;

    }else if(num3 > num1 && num3 > num2){
       return num3;

    } else {
        return " please enter a valid number"

    }

}
**/

/** 
let n;
let factorial;

n =window.prompt("enter a number to factor");
factorial = calculate(n);

console.log(factorial);
function calculate(n){
   if (n === 0 || n ===1){
    return 1;

   }else {
    let factor =1;
    for(let i =2; i<=n; i++){
        factor *=i;
    }
    return factor;
   }
}

let mynum = 100
//mynum = mynum.toLocaleString("en-US");
//undefined is the default set of the browser then pass the formatting options

mynum = mynum.toLocaleString(undefined, {style: "unit", unit: "kilogram"});

console.log(mynum);
============================================================
==========================================================

//Random NUmber Guessing
const random = Math.floor(Math.random()* 10 +1);

let guesses = 0;

document.getElementById("submittbtn").onclick = function(){
    let guess = document.getElementById("guesstext").value

    guesses +=1;
    if(!guess){
        alert("please input something");
    }
   else if(guess == random){
        //use a motherfucking backticssssss
        alert(`${random} is the number it took you ${guesses} `);
      
    } else if(guess <= random){
        alert('too small higher please ');

    } else if(guess >= random){
        alert('too large lower please ');

    } else if(isNaN(guess)){
        alert("please enter a number not a letter IDJit")
        

    }

}



============================================================
[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

CONVERTING TEMP TO F OR C

document.getElementById("submitbtn2").onclick = function() {
    let temp;
    temp = document.getElementById("temput").value;
    if(!temp){
        document.getElementById("convert1").innerHTML = "please enter a number"; 

    }
    else if(document.getElementById("cbtn").checked){
        
        temp= Number(temp);
        temp = getCelsius(temp);
        document.getElementById("convert1").innerHTML = temp.toFixed(2) + "°C";
    }else if (document.getElementById("fbtn").checked){
        
        temp= Number(temp);
        temp = getfahrenheit(temp);
        document.getElementById("convert1").innerHTML = temp + "°F";

    }
    else{
        document.getElementById("convert1").innerHTML = "please select a unit";
    }
    
}


function getCelsius(temp){
    return (temp - 32) * (5/9);

}
function getfahrenheit(temp){
    return temp *9 /5+32;

}





[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

function pinetree(height){
let space =" " * (height-curret);
let as ="*" * (curret*2 -1);
let s =" " * (height-curret);
let curret = 1;
for(curret < height; curret+=1;){
    console.log(space);
    console.log(as);
    console.log(s);


}
}
pinetree(8);

*/
//formula to convert temp to celsius (temp -32) * (5/9); 
// to fahrenheit () temp * 9 / 5+ 32; 




function pinetree(height) {
    for (let current = 1; current <= height; current++) {
        let space = " ".repeat(height - current);
        let asterisks = "*".repeat(current * 2 - 1);
        console.log(space + asterisks);
    }
}

pinetree(10);
   





 