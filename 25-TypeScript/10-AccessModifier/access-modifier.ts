interface Point {
    x: number;
    y: number;
  }
  
  interface Vehicle {
    travelTo(point: Point): void;
  }
  
  class Taxi implements Vehicle {
    constructor(private location: Point, private color?: string) {
    }
  
    travelTo(point: Point): void {
      console.log(`taksi x: ${this.location.x} y: ${this.location.y} dan x: ${point.x} y: ${point.y} konumuna gidiyor.`);
    }
  }
  
  let taxi_1: Taxi = new Taxi({ x: 3, y: 5 }); // o anda üretilen nesneye biz location bilgisi veriyoruz | bu location a karılık gelir
  
  taxi_1.travelTo({ x: 1, y: 2 }); // bu point e karşılık gelir