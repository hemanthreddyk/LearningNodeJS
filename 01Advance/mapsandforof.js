var john = {
    name : 'I am John',
    age: 24,
    isActive : true
}

var mary = {
    name : 'I am mary',
    age: 23,
    isActive : true
}

var sam = {
    name : 'I am sam',
    age: 29,
    isActive : false
}

let users = new Map();

//console.log(typeof users);

users.set('john',john);
users.set('mary',mary);
users.set('sam',sam);

// console.log(users.keys());
// console.log(users.values());

for (const key of users.keys()) {
    console.log(key);
}

for (const [key,value] of users.entries()) {
    console.log(key+' = ' + value.name);
}

users.forEach((value,key)=>{
    console.log(key+' = ' + value.name);
})

var arrofArr = [['One','1'],['Two','2'],['Three','3']];

var newMap = new Map(arrofArr);
console.log(newMap);