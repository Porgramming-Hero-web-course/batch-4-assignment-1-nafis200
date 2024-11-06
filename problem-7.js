{
    var Car = /** @class */ (function () {
        function Car(name, model, year) {
            this.name = name;
            this.model = model;
            this.year = year;
        }
        Car.prototype.getCarAge = function () {
            return 2024 - this.year;
        };
        return Car;
    }());
    var car = new Car("Honda", "Civic", 2018);
    var x = car.getCarAge();
    console.log(x);
}
