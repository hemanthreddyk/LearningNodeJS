var obj = {num:2};

var addToThis = function(a,b,c){
    return this.num+a+b+c;
};

console.log(addToThis.call(obj,1,2,3));
//functionname.call(obj,functionArguments)

var arr = [1,2,3];

console.log(addToThis.apply(obj,arr));

console.log(addToThis.bind(obj,arr));




