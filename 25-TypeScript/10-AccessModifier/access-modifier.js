var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: ".concat(this.location.x, " y: ").concat(this.location.y, " dan x: ").concat(point.x, " y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 3, y: 5 }); // o anda üretilen nesneye biz location bilgisi veriyoruz | bu location a karılık gelir
taxi_1.travelTo({ x: 1, y: 2 }); // bu point e karşılık gelir
