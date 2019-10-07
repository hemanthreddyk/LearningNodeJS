function Greetr(){
    this.greeting = "Hello module !!!!"
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports =  Greetr;