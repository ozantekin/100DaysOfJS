interface Point{
    x: number, 
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`taksi x: ${point.x} y: ${point.y} konumuna gidiyor.`);
    }
}

class Bus implements Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`otobüs x: ${point.x} y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1:Taxi = new Taxi();

taxi_1.travelTo({x:1, y:2}); // bu kordinatı verdiğimizde log içindeki mesajı yazıyor olması gerekiyordu.

taxi_1.currentLocation = {x:3, y:5};
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

let taxi_2 = new Taxi(); //tipini belirtmesekte olur ':Taxi'
taxi_2.travelTo({x:6, y:8});
taxi_2.currentLocation = {x:34, y:35};
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);

let bus_1 = new Bus();
bus_1.travelTo({x:98, y:99});


