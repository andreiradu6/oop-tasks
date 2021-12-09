// V1- prototype
console.log('<-------PROTO-------->')
function Person(name,age){
    this.name = name;
    this.age = age;
    this.stomach = [];
}

Person.prototype.eat = function(someFood){
    if(this.stomach.length === 10){
        return console.log("Pfff...i can't do this anymore!");
        
    } else {
        this.stomach.push(someFood)
        return console.log(this.stomach);
    }
}

Person.prototype.poop = function(){
    if(this.stomach.length === 0){
        return console.log("I cant poop dude, im empty");
        
    } else {
        return console.log(this.stomach = []);
    }
}

Person.prototype.getName = function(){
    return console.log(`${this.name.toString()}, ${this.age.toString()}`);
}

class Persons {
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    eat(someFood){
        if(this.stomach.length === 10){
            return console.log("I'm full, i can't do this anymore!");
        } else {
            return console.log(this.stomach.push(someFood));
        }
    }

    poop(){
        if(this.stomach.length === 0){
            return console.log('I cant, im empty');
        } else {
            return console.log(this.stomach = []);
        }
    }

    getName(){
        return console.log(`${this.name.toString()}, ${this.age.toString()}`);
    }
}

function Baby(name,age,favoriteToy){
    Person.call(this,name,age);
    this.favoriteToy = favoriteToy;
}

// inheritance the prototype of Person
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function(){
    return console.log(`Playing with ${this.favoriteToy}`);
}

let baby = new Baby('baby',1,'masinuta');
console.log(baby);
baby.eat('lapte');
baby.eat('lapte');
baby.eat('lapte');
baby.eat('lapte');
baby.eat('lapte');
baby.eat('lapte');
baby.eat('lapte');
baby.eat('lapte');
baby.eat('lapte');
baby.eat('lapte');
baby.eat('lapte');
baby.eat('lapte');
baby.eat('lapte');
baby.eat('lapte');
baby.play();
baby.poop();
baby.poop();


console.log('<----------CLASS------------->');

class Baby2 extends Person{
    constructor(name,age,favoriteToy){
        super(name,age);
        this.favoriteToy = favoriteToy;
    }

    play(){
        return console.log(`Playing with ${this.favoriteToy}`);
    }
}


let baby2 = new Baby2('baby',1,'dyno');
console.log(baby2);

baby2.poop();
baby2.eat('supa');
baby2.eat('paine');
baby2.eat('lapte');
baby2.eat('lapte');
baby2.eat('lapte');
baby2.eat('lapte');
baby2.eat('lapte');
baby2.eat('lapte');
baby2.eat('lapte');
baby2.eat('lapte');
baby2.eat('lapte');
baby2.play();


export default Person