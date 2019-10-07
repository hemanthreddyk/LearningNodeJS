class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.name = "ReadError"
        this.cause = cause;
    }
}

class ValidationError extends ReadError {}
class PropertyRequiredError extends ValidationError {}

function readUser(json) {
    let user;
    try {
        user = JSON.parse(json);
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError("Syntax Error", err);
        } else {
            throw err;
        }
    }

    try {
        validateUser(user);
    } catch (err) {
        if (err instanceof PropertyRequiredError) {
            throw new ReadError("Validation Error", err);
        } else {
            throw err;
        }
    }
}

function validateUser(user) {
    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }
}

try {
    readUser('{bad json}');
} catch (e) {
    if (e instanceof ReadError) {
        console.log(e);
        console.log("Original Error : " + e.cause);
        console.log(typeof e.cause);
    } else {
        throw e;
    }
}