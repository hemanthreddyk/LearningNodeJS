class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }

    stop(){
        super.stop();
        this.hide();
    }
}
console.dir(Rabbit);
console.dir(Animal);
let animal = new Animal("My animal");
let rabbit = new Rabbit("My rabbit");
rabbit.run(5);
rabbit.stop();