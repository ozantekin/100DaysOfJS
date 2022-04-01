<h1 align="center"> Notlar </h1>

- İlk durum:

```typescript
interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`taksi x: ${point.x} y: ${point.y} konumuna gidiyor.`);
  }
}

let taxi_1: Taxi = new Taxi();

taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 3, y: 5 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
```

- Constructor ekleyelim:

```typescript
interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  constructor(location: Point) {
    this.currentLocation = location;
  }

  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`taksi x: ${point.x} y: ${point.y} konumuna gidiyor.`);
  }
}

let taxi_1: Taxi = new Taxi();

taxi_1.travelTo({ x: 1, y: 2 });

taxi_1.currentLocation = { x: 3, y: 5 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
```

- Bu durumda `let taxi_1:Taxi = new Taxi();`'nin `new Taxi();` hata olduğunu gösterecektir.
- Artık taksi bizden parametre bekler yoksa hata alırız:

```typescript
interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  constructor(location: Point) {
    this.currentLocation = location;
  }

  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`taksi x: ${point.x} y: ${point.y} konumuna gidiyor.`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 3, y: 5 });

taxi_1.travelTo({ x: 1, y: 2 });
```

- Örnek,Vehicle color verelim iki şekilde:

```typescript
interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  color: string;

  constructor(location: Point) {
    this.currentLocation = location;
  }

  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`taksi x: ${point.x} y: ${point.y} konumuna gidiyor.`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 3, y: 5 });

taxi_1.travelTo({ x: 1, y: 2 });

taxi_1.color = "Red";

console.log(taxi_1.currentLocation);
```

- 2.yol:

```typescript
interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  color: string;

  constructor(location: Point, color: string) {
    this.currentLocation = location;
    this.color = color;
  }

  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`taksi x: ${point.x} y: ${point.y} konumuna gidiyor.`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 3, y: 5 }, "Red");

taxi_1.travelTo({ x: 1, y: 2 });

console.log(taxi_1.currentLocation);
```

- color optional olarak eklemek istersek önceden dediğimiz `?` kullanılır:

```typescript
interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  color: string;

  constructor(location: Point, color?: string) {
    this.currentLocation = location;
    this.color = color;
  }

  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`taksi x: ${point.x} y: ${point.y} konumuna gidiyor.`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 3, y: 5 });

taxi_1.travelTo({ x: 1, y: 2 });

console.log(taxi_1.currentLocation);
```

- Yukarıdaki durumda `location` zorunlu ama `color` optional olur.
- Eğer location'a da `?` eklersek:

```typescript
interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  color: string;

  constructor(location?: Point, color?: string) {
    this.currentLocation = location;
    this.color = color;
  }

  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`taksi x: ${point.x} y: ${point.y} konumuna gidiyor.`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 3, y: 5 });

taxi_1.travelTo({ x: 1, y: 2 });

console.log(taxi_1.currentLocation);

let taxi_2 = new Taxi();
```

- new içine herhangi bir parametre göndermeden de tanımlayabiliriz artık yukarıda dediğimiz hatayı almayız.
