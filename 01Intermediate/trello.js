const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(days);


//for each
days.forEach(function (day, index) { //call back function
    console.log(`starts with ${index+1} -- ${day}`);
});