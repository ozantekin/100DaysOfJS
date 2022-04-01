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
