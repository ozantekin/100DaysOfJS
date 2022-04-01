var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: ".concat(this._location.x, " y: ").concat(this._location.y, " dan x: ").concat(point.x, " y: ").concat(point.y, " konumuna gidiyor."));
    };
    Object.defineProperty(Taxi.prototype, "Location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y) {
                throw new Error("Kordinat bilgileri negatif olamaz"); // hata fırlat 
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 3, y: 5 }); // o anda üretilen nesneye biz location bilgisi veriyoruz | bu location a karılık gelir
taxi_1.travelTo({ x: 1, y: 2 }); // bu point e karşılık gelir
var currentLocation = taxi_1.Location; // location'a property olarak ulaştık 
taxi_1.Location = { x: 2, y: 5 };
