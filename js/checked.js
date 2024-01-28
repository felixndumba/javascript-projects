//checked property in java script using the radio and checked property in html
//
//const mycheckbox= document.getElementById("mycheckbox");
//const visabtn= document.getElementById("visabtn");
//const mastercardbtn= document.getElementById("mastercardbtn");
//const paypalbtn= document.getElementById("paypalbtn");
//const mysubmit= document.getElementById("mysubmit");
//const subresult= document.getElementById("subresult");
//const paymentresult= document.getElementById("paymentresult");
//
//mysubmit.onclick= function(){
//    if(mycheckbox.checked){
//        subresult.textContent=`you have subscried!!!`
//    }
//    else{
//        subresult.textContent=`you have NOT subscried!!!`
//    }
//    if(visabtn.checked){
//        paymentresult.textContent=`you have selected visa as your payment method`
//    }
//    else if(mastercardbtn.checked){
//        paymentresult.textContent=`you have selected Mastercard as your payment method`
//    }
//    else if(paypalbtn.checked){
//        paymentresult.textContent=`you have selected paypal as your payment method`
//    }
//    else{
//        paymentresult.textContent=`please select a  payment method!!!`
//    }
//
//
//}
//
//ternary operators   this are used instead of if else statements
let age = 21
let message = age >= 18? "youre an adult": "youre a minor";
console.log (message);

let purchaseamount= 1000;
let discount =purchaseamount>=150 ? 10 : 0;
console.log(`your total is ${purchaseamount-purchaseamount*(discount/100)} dollars`);


//using switch instead of many else if statements
//break staements are used to reak out of the swicth , this means that the rest of the code will be executed when the condition is meet without checking the other present conditions, all the consol.log that follow will output in the console. 

let day =4

switch(day){
    case 1:
        console.log("it is monday");
        break;
    case 2:
        console.log("it is tuesday");
        break;
     case 3:
        console.log("it is wenesday");
        break;
     case 4:
        console.log("it is thursday");
        break;
      case 5:
        console.log("it is friday");
        break;
      case 6:
        console.log("it is saturday");
        break;
      case 7:
        console.log("it is sunday");
        break;
        default:
            console.log("that is not a day");    

}
//string methods = allowsyou to manipulate strings and workwith text
//charAt()allows you to see the character at a certain position
//indexOf(put a character)   allows you to see the position of the character your searching
//variable.lastindexOf()allows you to search the last letter that your looking for for exapmle there might be two f in a word it will return the positionof the last f
// variable.lenth function that allows you to now the lenth of your string
//username.trim is used to clear white space that is existing
//username.toUpperCase() changes the string to uppercase and same to username.toLowerCase()
//username.repeat() within the parenthisis of the method you can put how many times do you want the string to be repeated
//let result=username.startsWith("what your testing is starting"); this is more of boolean and is used to test what starts in a string if its true  it will return true , you define username and assign t a string to test with it
//let username = "felix";
//console.log(username.charAt(0));
//console.log(username.indexOf("x"));
// to replace characeter in the string we can use replace function 

let phonenumber= "123-234-565";
phonenumber= phonenumber.replaceAll("-","/");
console.log(phonenumber);

//padding= adding zeros or any numbers to a string, there is padStart and padEnd the only diffrence is that start adds the numbers in the begining while end adds numbers in the end
//variable.padStart(how many times youwant the nu,ber to occur, "the actual number that you want to be iterated")


let number= "123-234-556";
number=number.padEnd(20,"1");

console.log(  number);

//string slicing = creating a substring from a portion of other strings without altering the original
//string.slice (start,end)
//when you use a negative index it means your satrting from the end so the index of the characters will satrt from the end like in our case when i put an index of -1 the resultant char will be i from bundi

const fullname="felix bundi"
let firstname= fullname.slice(5,11);
console.log(firstname);

//you can also use indeOf methodto extract the frst name in the string
const fullnames= "james kimomdio";
let firstnames=fullnames.slice(0,fullnames.indexOf(" "));
console.log(firstnames);

const email="bundif2003@gmail.com";
let username=email.slice(0, email.indexOf("@"));
let extension=email.slice(email.indexOf("@"));
console.log(username);
console.log(extension);


//method chaining = calling one method after another in on a continous line of code
let name= window.prompt("enter your username");

//no method chaining
//name=name.trim();
//let letter= name.charAt(0);
//letter=letter.toUpperCase();   
//
//let extraletters= name.slice(1);
//extraletters=extraletters.toLowerCase();
//name= letter+extraletters;
//console.log(name);

// Using the method chaining

let name= name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase()
console.log(name)
