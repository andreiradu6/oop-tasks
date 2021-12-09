// V1
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
}

Airplane.prototype.takeOff = function(){
    this.isFlying = true;
}

Airplane.prototype.land = function(){
    this.isFlying = false;
}

let myAirplane = new Airplane('AirBus');

console.log(myAirplane);

myAirplane.takeOff();

console.log(myAirplane);

myAirplane.land();

console.log(myAirplane);

// V2
console.log('------V2-------')
class AirplaneV2 {
    constructor(name,isFlying = false){
        this.name = name;
        this.isFlying = isFlying;
    }

    takeOff(){
        return this.isFlying = true;
    }

    land(){
        return this.isFlying = false;
    }
}


const myPlane = new AirplaneV2('Boening 747');
console.log(`This is my airplane:`,myPlane);
console.log(`${myPlane.name} takes off!`);
myPlane.takeOff();
console.log(`${myPlane.name} took off!`);
console.log(myPlane);
console.log(`${myPlane.name} lands!`);
myPlane.land();
console.log(`${myPlane.name} landed!`);
console.log(myPlane);
