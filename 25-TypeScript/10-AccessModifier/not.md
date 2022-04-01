<h1 align = "center"> Notlar </h1>

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
  currentLocation: Point;

  constructor(location: Point, color?: string) {
    this.currentLocation = location;
    this.color = color;
  }

  travelTo(point: Point): void {
    console.log(`taksi x: ${point.x} y: ${point.y} konumuna gidiyor.`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 3, y: 5 });

taxi_1.travelTo({ x: 1, y: 2 });

console.log(taxi_1.currentLocation);
```

- Yukarıda bulunan public ifadeler:
  - color
  - currentLocation
  - travelTo
  - Bunlar varsayılan olarak class dışından da ulaşılabilir olması için public olarak işaretlenmiş.
  - Yani tekrar özelliklerin başında public belirtmemize gerek yok: `public color:string;`
  - public özelliklere biz dışarıdan şı şekilde ulaşabiliyorduk `tax_1.location;`
  - Ancak pulic olarak açıtığımızda bu bilgiyi yanlışlıkla değiştirme ihtimalimiz var o yüzden private olarak kalması daha mantıklı.
- Şimdi private yapalım:

```typescript
interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  private color: string;
  private currentLocation: Point;

  constructor(location: Point, color?: string) {
    this.currentLocation = location;
    this.color = color;
  }

  travelTo(point: Point): void {
    console.log(`taksi x: ${point.x} y: ${point.y} konumuna gidiyor.`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 3, y: 5 });

taxi_1.travelTo({ x: 1, y: 2 });
```

- 2.yol ise:

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
    console.log(`taksi x: ${point.x} y: ${point.y} konumuna gidiyor.`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 3, y: 5 });

taxi_1.travelTo({ x: 1, y: 2 });
```

-this ile belirtememize veya üstte tanımlamamıza gerek kalmadı fark ettiyseniz sildik.

- Artık location ve color sadece class içerisinden ulaşılabilen bir nesne oldu.
- Örneğin `travelTo` içerisinde location bilgisini kullanalım:

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
}

let taxi_1: Taxi = new Taxi({ x: 3, y: 5 }); // o anda üretilen nesneye biz location bilgisi veriyoruz | bu location a karılık gelir

taxi_1.travelTo({ x: 1, y: 2 }); // bu point e karşılık gelir
```

- locaiton public olsun diyelim;
  - public özelliklere biz dışarıdan şu şekilde ulaşabiliyorduk `tax_1.location;`
  - Ancak pulic olarak açıtığımızda bu bilgiyi yanlışlıkla değiştirme ihtimalimiz var. O yüzden private olarak kalması daha mantıklı.
  - Bu bilgi private olarak kalsın ama yine de biz `taxi_1` üzerinden location'a kontrollü bir şekilde ulaşıp ve kontrollü bir şekilde de eğer, bilgi aktarmak istiyorsak farklı bir özellik kullanacağız. Bunun için diğer klasöre geçin!
