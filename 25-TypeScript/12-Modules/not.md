<h1 align = "center"> Notlar </h1>

- Örnek, verdiğimiz class'ları farlı konumlarda, farklı dosyalarda kullabilmek için class'ı export etmemiz gerekiyor yani dışarıya açmamız gerekiyor.
- Dışarıya açmamız için başında `export` eklememiz gerekiyor.

```typescript
export class Taxi implements Vehicle {
  constructor(private _location: Point, private _color?: string) {}

  travelTo(point: Point): void {
    console.log(
      `taksi x: ${this._location.x} y: ${this._location.y} dan x: ${point.x} y: ${point.y} konumuna gidiyor.`
    );
  }

  get location() {
    return this._location;
  }

  set location(value: Point) {
    if (value.x < 0 || value.y) {
      throw new Error("Kordinat bilgileri negatif olamaz"); // hata fırlat
    }
    this._location = value;
  }
}
```

- Artık Taxi sınıfı taxi.ts dosyası dışında da kullanabiliriz.
- Gönderdiğimiz class'ı kullanabilmek için gideceği dosyanın başında import etmemiz gerekiyor.

```typescript
import { Taxi } from "./taxi";

interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  travelTo(point: Point): void;
}

let taxi_1: Taxi = new Taxi({ x: 3, y: 5 }); // o anda üretilen nesneye biz location bilgisi veriyoruz | bu location a karılık gelir

taxi_1.travelTo({ x: 1, y: 2 }); // bu point e karşılık gelir

let currentLocation = taxi_1.location; // location'a property olarak ulaştık

taxi_1.location = { x: 2, y: 5 };
```

- Implement etme yolu:

```typescript
class Bus implements Vehicle {}
```

- 1- Bus tıkla.
- 2- Çıkan baloncuğa tıkla.
- 3- Implement interface 'Vehicle' tıkla.
- 4- Sonuç:

```typescript
class Bus implements Vehicle {
  travelTo(point: Point): void {
    throw new Error("Method not implemented.");
  }
}
```
