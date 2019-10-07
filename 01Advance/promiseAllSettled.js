let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise.allSettled(urls.map((url) => fetch(url)))
    .then(results=>{
        results.forEach((result,num)=>{
            if(result.status == 'fulfilled'){
                console.log(`${urls[num]} : ${result.value.status}`);
            }
            if(result.status == 'rejected'){
                console.log(`${urls[num]} : ${result.reason}`);
            }
        });
    });



    function promisify(f, manyArgs = false) {
        return function (...args) {
          return new Promise((resolve, reject) => {
            function callback(err, ...results) { // our custom callback for f
              if (err) {
                return reject(err);
              } else {
                // resolve with all callback results if manyArgs is specified
                resolve(manyArgs ? results : results[0]);
              }
            }
      
            args.push(callback);
      
            f.call(this, ...args);
          });
        };
      };