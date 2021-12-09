console.log("task 2");
console.log('<---------PROTO---------->');
const Car = function (model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
};

Car.prototype.fill = function (gallons) {
  this.tank = this.tank + gallons;
};

Car.prototype.drive = function (distance) {
    let distanceMax = this.tank * this.milesPerGallon;
    console.log("distanceMax ", distanceMax);
    if(this.tank){
        if(distance > distanceMax){
            this.odometer = distanceMax;
            return console.log(`
                I cant run for ${distance}. I can run only for ${this.odometer} miles, becuase I dont have enough fuel. 
                Current fuel level is ${this.tank} and when I reach ${this.odometer} miles
                i'll be with ${this.tank - (distanceMax/this.milesPerGallon)} gallons left`
            );
        } else {
            this.odometer = distance;
            this.tank = this.tank - (distance / this.milesPerGallon);
            return console.log(`I reached the destination: ${this.odometer} miles reached and ~ ${this.tank.toFixed(3)} gallons left`);
        }
    } else {
        return console.log(`I dont have fuel to start. Please refill!`);
    }
};

let myCar = new Car("Dacia", 5.2);
console.log(myCar);
myCar.fill(100);
myCar.drive(519);


console.log('<---------CLASS--------->');

class Carz {
    constructor(model,milesperGallon){
        this.model = model;
        this.milesPerGallon = milesperGallon;

        this.tank = 0;
        this.odometer = 0;
    }


    fill(gallons){
        this.tank = this.tank + gallons
        return `Right now I have ${this.tank} gallons`
    }


    drive(distance){
        let distanceMax = this.tank * this.milesPerGallon;
        console.log("distanceMax ", distanceMax);
        if(this.tank){
            if(distance > distanceMax){
                this.odometer = distanceMax;
                // let copyTank = this.tank;
                // this.tank = this.tank - (distanceMax / this.milesPerGallon);
                return console.log(`
                    I cant run for ${distance}. I can run only for ${this.odometer} miles, becuase I dont have enough fuel. 
                    Current fuel level is ${this.tank} and when I reach ${this.odometer} miles
                    i'll be with ${this.tank - (distanceMax/this.milesPerGallon)} gallons left`
                );
            } else {
                this.odometer = distance;
                this.tank = this.tank - (distance / this.milesPerGallon);
                return console.log(`I reached the destination: ${this.odometer} miles reached and ~ ${this.tank.toFixed(3)} gallons left`);
            }
        } else {
            return console.log(`I dont have fuel to start. Please refill!`);
        }
    }
}


const carz = new Carz('Dacia',5.2);
console.log(carz);
carz.fill(100);
carz.drive(519);


export default {
    Car,
    Carz
}