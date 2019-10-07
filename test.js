var x = [
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "henryk",
    "last": "hommel"
    },
    "nat": "DE"
    },
    {
    "gender": "female",
    "name": {
    "title": "mrs",
    "first": "holly",
    "last": "clarke"
    },
    "nat": "NZ"
    }];

    console.log(x);

const https = require('https')


const req = https.request("https://randomuser.me/api/?results=5&inc=name,gender,nat&noinfo", (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', (d) => {
    process.stdout.write(d)
    //x=d;
    var y= JSON.parse(d);
    console.log("\n x=   "+y);
  })
})

req.on('error', (error) => {
  console.error(error)
})

req.end();

//console.log("\nx="+x);