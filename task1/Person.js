// V1- prototype
console.log('<-------PROTO START-------->')
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
        this.stomach = []
        return console.log(this.stomach);
    }
}

Person.prototype.getName = function(){
    return console.log(`${this.name.toString()}, ${this.age.toString()}`);
}

const eu = new Person('Andrei',23);
eu.poop();
eu.eat('mandarine');
eu.eat('mandarine');
eu.eat('mandarine');
eu.eat('mandarine');
eu.eat('mandarine');
eu.eat('mandarine');
eu.eat('mandarine');
eu.eat('mandarine');
eu.eat('mandarine');
eu.eat('mandarine');
eu.poop();
eu.eat('mandarine');
eu.eat('mandarine');
// console.log(eu);
eu.getName();


// V2 - class
console.log('<----------CLASS START---------->')

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
            this.stomach.push(someFood)
            return console.log(this.stomach);
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

const pers = new Persons('andrei',24);
console.log(pers);
pers.poop();
pers.eat('Portocale');
pers.eat('Portocale');
pers.eat('Portocale');
pers.eat('Portocale');
pers.eat('Portocale');
pers.eat('Portocale');
pers.eat('Portocale');
pers.eat('Portocale');
pers.eat('Portocale');
pers.eat('Portocale');
pers.eat('Portocale');
pers.eat('Portocale');
pers.eat('Portocale');
console.log(pers);
pers.poop();
console.log(pers);
pers.getName();


export default {
    Person,
    Persons
}