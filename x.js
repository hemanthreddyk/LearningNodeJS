const https = require('https');

https.get('https://randomuser.me/api/?results=5&inc=name,gender,nat&noinfo', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
    console.log("\n"+chunk+"\n");
   // data=JSON.parse(chunk);
   // console.log("\n"+data+"\n");
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});