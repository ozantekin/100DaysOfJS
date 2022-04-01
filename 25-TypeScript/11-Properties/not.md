<h1 align="center"> Notlar </h1>

- Kontrollü bir şekilde ulaşmak veya içerisine veri atmak itediğimiz durumlarda kullanırlır.
- Public olaracak açmak nesne üzerinden istediğmiz atamayı yapabiliriz. Bu yapacağımız atama çalışma zamanında hataya neden olabilir.
- İstemediğimiz bir bilgiyi `location`'a yani property'e atmak istemeyebiliriz.

```typescript
interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  constructor(private location: Point, private color?: string) {}

  travelTo(point: Point): void {
    console.log(
      `taksi x: ${this.location.x} y: ${this.location.y} dan x: ${point.x} y: ${point.y} konumuna gidiyor.`
    );
  }

  getLocation() {
    return this.location;
  }
}
```

- location private bile olsa method aynı class içerisinde olduğu için this objesi üzerinden location private olsa bile ulaşılabiliyor.
- Kontrol için bu tarz bir yöntem kullanabiliriz:

```typescript
interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  constructor(private location: Point, private color?: string) {}

  travelTo(point: Point): void {
    console.log(
      `taksi x: ${this.location.x} y: ${this.location.y} dan x: ${point.x} y: ${point.y} konumuna gidiyor.`
    );
  }

  getLocation() {
    return this.location;
  }

  setLocation(value: Point) {
    if (value.x < 0 || value.y) {
      throw new Error("Kordinat bilgileri negatif olamaz"); // hata fırlat
    }
    this.location = value;
  }
}

let taxi_1: Taxi = new Taxi({ x: 3, y: 5 }); // o anda üretilen nesneye biz location bilgisi veriyoruz | bu location a karılık gelir

taxi_1.travelTo({ x: 1, y: 2 }); // bu point e karşılık gelir

let currentLocation = taxi_1.getLocation();

taxi_1.setLocation({ x: 2, y: 5 });
```

- Ama bu yöntem daha mantıklı olacaktır:

```typescript
interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
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

let taxi_1: Taxi = new Taxi({ x: 3, y: 5 }); // o anda üretilen nesneye biz location bilgisi veriyoruz | bu location a karılık gelir

taxi_1.travelTo({ x: 1, y: 2 }); // bu point e karşılık gelir

let currentLocation = taxi_1.location; // location'a property olarak ulaştık

taxi_1.location = { x: 2, y: 5 };
```

- Constructor içindeki \_ ile başlatarak isimlendirmek faydalı olacaktır.
