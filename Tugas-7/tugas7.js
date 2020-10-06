// ---------Soal nomer 1--------

// Release 0

class Animal {
    constructor(name) {
        this.name = name;
        this._legs = 4;
        this._cold_blooded = "false";
    }

    get AnimalName() {
        return this.name;
    }

    get animalLegs() {
        return this._legs;
    }
    get animalBlood() {
        return this._cold_blooded;
    }

    set AnimalName(x) {
        this._animalname = x;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.animalLegs) // 4
console.log(sheep.animalBlood) // false

// Release 1
class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    jump() {
        return " hop hop";
    }
}

var kodok = new Frog("buduk")
kodok.jump()
console.log(kodok);

class Ape extends Animal {
    constructor(name) {
        super(name);
    }
    yell() {
        return "Auoooo";
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell()
console.log(sungokong);

//------------- Soal nomer 2--------------
class Clock {
    constructor({
        template
    }) {
        this._template = template
        this.timer
    }
    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this._template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)
        console.log(output)
    }

    stop() {
        clearInterval(this.timer)
    }
    start() {
        this.render()
        this.timer = setInterval(() => this.render(), 1000)
    }

}

let clock = new Clock({
    template: 'h:m:s'
});
clock.start();