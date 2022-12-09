function addition(){
    let x;
   x = document.getElementById("xvalue").value;
   x=Number(x);console.log(typeof(x));
    //assigning 3 to variable x
    let y;
   y = document.getElementById("yvalue").value;
   y=Number(y);console.log(typeof(y));
    //assigning 2 to variable y
    let z=x+y;   
document.getElementById("add").innerHTML=z;

}
function substraction(){
    x = document.getElementById("xvalue").value;
   x=Number(x);console.log(typeof(x));
    //assigning 3 to variable x
    let y;
   y = document.getElementById("yvalue").value;
   y=Number(y);console.log(typeof(y));
    //assigning 2 to variable y
    let a=x-y;
    document.getElementById("sub").innerHTML=a;

}
function multiplication(){
    x = document.getElementById("xvalue").value;
   x=Number(x);console.log(typeof(x));
    //assigning 3 to variable x
    let y;
   y = document.getElementById("yvalue").value;
   y=Number(y);console.log(typeof(y));
    //assigning 2 to variable y
    let b=x*y;
    document.getElementById("mul").innerHTML=b;


}
function division(){
    x = document.getElementById("xvalue").value;
   x=Number(x);console.log(typeof(x));
    //assigning 3 to variable x
    let y;
   y = document.getElementById("yvalue").value;
   y=Number(y);console.log(typeof(y));
    //assigning 2 to variable y
    let c=x/y;
    document.getElementById("div").innerHTML=c;

}
function modulus(){
    x = document.getElementById("xvalue").value;
   x=Number(x);console.log(typeof(x));
    //assigning 3 to variable x
    let y;
   y = document.getElementById("yvalue").value;
   y=Number(y);console.log(typeof(y));
    //assigning 2 to variable y
    let d=x%y;
    document.getElementById("mod").innerHTML=d;

}
function exponential(){
    x = document.getElementById("xvalue").value;
   x=Number(x);console.log(typeof(x));
    //assigning 3 to variable x
    let y;
   y = document.getElementById("yvalue").value;
   y=Number(y);console.log(typeof(y));
    //assigning 2 to variable y
    let e=x**y;
    document.getElementById("expo").innerHTML=e;

}