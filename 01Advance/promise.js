const userLeft = true;
const userWatchingSomethingElse = true;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: "User left",
            message: ':('
        });
    } else if (userWatchingSomethingElse) {
        errorCallback({
            name: "User Watching something else",
            message: "(:("
        });
    } else {
        callback('User watching My video');
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + " " + error.message)
})


function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "User left",
                message: ':('
            });
        } else if (userWatchingSomethingElse) {
            reject({
                name: "User Watching something else",
                message: "(:("
            });
        } else {
            resolve('User watching My video');
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + " " + error.message)
});