var Emitter = require("events");


var emtr = new Emitter();

emtr.on('greet',function(a,b){
    console.log(a+" "+b);
});




emtr.emit("greet","hello","world","test");