var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: ".concat(point.x, " y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs x: ".concat(point.x, " y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Bus;
}());
var taxi_1 = new Taxi;
taxi_1.travelTo({ x: 1, y: 2 }); // bu kordinatı verdiğimizde log içindeki mesajı yazıyor olması gerekiyordu.
taxi_1.currentLocation = { x: 3, y: 5 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
var taxi_2 = new Taxi; //tipini belirtmesekte olur ':Taxi'
taxi_2.travelTo({ x: 6, y: 8 });
taxi_2.currentLocation = { x: 34, y: 35 };
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);
var bus_1 = new Bus();
bus_1.travelTo({ x: 98, y: 99 });
