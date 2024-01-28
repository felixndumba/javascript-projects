//const max = 100;
//const min = 50;
//
//
//let randomnum= Math.floor(Math.random() * (max -min)) + min;
//
//console.log(randomnum);

//math.floor is used to eliminate the decimalpoint in the randmiser, math.random is used to pick a random number, (max-min ) the brackets are used to  for operationalpredence so that it can take max- min first, *(max-min) is the highest number in which tha random number can be and the + min is the lowest number in which the random number can be.

const mybutton= document.getElementById("mybutton");
const mylabell= document.getElementById("mylabel1");
const mylabel2= document.getElementById("mylabel2");
const mylabel3= document.getElementById("mylabel3");
const min= 1;
const max= 6;
let randomNum1;
let randomNum2;
let randomNum3;
let age;


 document.getElementById("submit").onclick= function(){
    age=document.getElementById("input").value;
    age= Number(age);
    console.log(age, typeof age);
    if(age>17){
        document.getElementById("h1").textContent=`Goodluck youre above the legal age!!!!!!!`
    }
    else{
        document.getElementById("h1").textContent= `sorry but your below the age limit!!!`
    }
    
    
 }
 
 mybutton.onclick= function(){
    if(age>17){
        randomNum1= Math.floor(Math.random() * max) + min;
        randomNum2= Math.floor(Math.random() * max) + min;
        randomNum3= Math.floor(Math.random() * max) + min;
        mylabel1.textContent=randomNum1;
        mylabel2.textContent=randomNum2;
        mylabel3.textContent=randomNum3;
    }
    else{
        window.alert("please exist the page!!!!!");
    }
   
 }
