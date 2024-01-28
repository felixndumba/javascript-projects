const input = document.getElementById("input");
const input1= document.getElementById("input1");
const loginbtn = document.getElementById("loginbtn");
const h1 = document.getElementById("h1");
let username;
let pass;
let loggedin = true;

document.getElementById("loginbtn").onclick= function(){
        username= document.getElementById("input").value;
        pass= document.getElementById("input1").value;
       if( username =="felixbundi"&& pass=="12345")   {
        document.getElementById("h1").textContent=`welcome Mr ${username}`;
   }
    else{
        document.getElementById("h1").textContent=`invalid credentials`;
       window.alert("please reenter your credentials");
    }
   
}
