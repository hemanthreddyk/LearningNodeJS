let add = function (x) {
    let sum = x;
    let addy = function (y) {
        sum += y;
        return addy;
    }

    addy.toString = function () {
        return sum;
    };
    return addy;
}

console.log(`${add(3)(4)}`);