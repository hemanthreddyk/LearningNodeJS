function do_something(){
    console.log(bar);
    if(1==1){
        var x=5;
    }
    console.log(x);
    var bar=11;
    console.log(bar);
}

function do_something1(){
    var bar;
    console.log(bar);
    bar=11;
    console.log(bar);
}

//do_something is implicitly understood as do_something1

function do_something2(){
    bar=11;
    console.log(bar);
    var bar;
    console.log(bar);
}

myName1="hemanth";

function logName(){
    console.log(myName1+"\n");
}
logName();
var myName1;

/*  let does not support hoisting it throws error
myName2="Reddy";

function logName(){
    console.log(myName2+"\n");
}
logName();
let myName2;
*/

do_something();
//do_something1();
//do_something2();

