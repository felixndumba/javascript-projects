//type conversions     changing of the data types of a value to another

//let age= window.prompt("what is you age?");
//age = Number(age);
// age +=1;
// console.log(age, typeof age);
 // conversion is convinient in that when you increment the value by one its not added to the front like astring to be 201 instead it becomes 21



 
//constants
let pi = 3.142;
 let radius;
let circumfrence;

document.getElementById("mysubmit").onclick=function(){
   radius=document.getElementById("myinput").value;
   circumfrence= radius*pi*2;
console.log(circumfrence);
document.getElementById("myh1").textContent= `the cicurmfrece is ${circumfrence} metres `
}


//


