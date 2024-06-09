var Car = /** @class */ (function () {
    function Car(model, year, make) {
        this.model = model;
        this.year = year;
        this.make = make;
    }
    Car.prototype.start = function () {
        console.log('engine start');
    };
    return Car;
}());
var car = new Car('Toyota', 2022, 2028);
console.log(car.start());
