let user = {
    name: "hemanth",
    age: 30,

    sayHi() {
        console.log(this);
        console.log(`Hi ${this.name}`);
    }
};

user.sayHi();

// let admin = user;
// user=null;

// admin.sayHi();

let user1 = {
    firstName: "Stark",
    sayHi() {
        let arrow = () => {
            console.log(this);
            console.log(this.firstName);
        }
        arrow();
    }
};

user1.sayHi();