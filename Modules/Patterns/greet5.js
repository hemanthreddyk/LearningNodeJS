//revealing module pattern

var greeting = "Hello module !!!!!"

function greet(){
        console.log(greeting);
    }


module.exports =  {
    greet : greet
};