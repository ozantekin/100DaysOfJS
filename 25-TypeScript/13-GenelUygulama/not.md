<h1 align="center"> Notlar </h1>

- Uzun yol:

```typescript
class Porduct {
  id: number;
  name: string;

  constructor(id, name) {
    this.id = id;
    this.name;
  }
}
```

- Tercih ettimiz yol:

```typescript
class Porduct {
  constructor(public id?: number, public name?: string) {}
}
```

- Reminder:
  - Interface sadece method imzalarımızı tanımlar.
  - İçinde doldurduğumuz herhnagi bir method gövdesi olamaz.
- Reminder:
  - `getProducts(): Array<Porduct>;` = `getProducts():Product[];`
- Reminder:
  - `saveProduct(product: Porduct): void;` Geriye bir değer döndürmesini istemiyorsak `void` kullanılır.
- Reminder:
  - Dışarıda kullanacağımız interface, class... başına `export` eklenir.
- Reminder:
  - Interface içinde oluşturulan method'ların kullanılacağı yani method'ların içlerinin doldurulma işlemi class içinde yapılır. (IProductService.ts/ProductService.ts)
- Reminder:
  - Implements anatar kelimesi ile IProductService içindeki özellikleri ProductService içinde de tanımlamış oluyoruz.
  - `class ProductService implements IProductService { }`
- Reminder:
  - Implements kullanma adımları:
    - 1- `class ProductService implements IProductService { }` içidenki `ProductService` tıkla.
    - 2- Yandaki baloncuğa tıkla.
    - 3- `Implement interface 'IProductService'` tıkla.
    - 4- Sonuc:

```typescript
class ProductService implements IProductService {
  getById(id: number): Product {
    throw new Error("Method not implemented.");
  }
  getProducts(): Product[] {
    throw new Error("Method not implemented.");
  }
  saveProduct(product: Product): void {
    throw new Error("Method not implemented.");
  }
  deleteProduct(product: Product): void {
    throw new Error("Method not implemented.");
  }
}
```

- Reminder:
  - Class sayesinde gövdeyi sahip bir method haline gelir.
- Constructor çalıştırma Örnek:

```typescript
import { Product } from "./Product";

export class SimpleDataSource {
  private products: Array<Product>;

  constructor() {
    this.products = new Array<Product>(
      new Product(1, "iPhone SE", "Phone", 11000),
      new Product(2, "iPhone 12", "Phone", 15800),
      new Product(3, "iPhone 13", "Phone", 17500),
      new Product(4, "iPhone 13 Pro", "Phone", 25000)
    );
  }
}
```

- Constructor'ı çalıştıma:

```typescript
let p = new SimpleDataSource();
```

- Bunu dediğimiz zaman constructor çalışacak.
- `private products` içine, constructor içinde hazırladığımız 4 elemanlı liste atanacak.

- Reminder:
  - Method gösterimi: `getPorducts()`.

```typescript
import { Product } from "./Product";

export class SimpleDataSource {
  private products: Array<Product>;

  constructor() {
    this.products = new Array<Product>(
      new Product(1, "iPhone SE", "Phone", 11000),
      new Product(2, "iPhone 12", "Phone", 15800),
      new Product(3, "iPhone 13", "Phone", 17500),
      new Product(4, "iPhone 13 Pro", "Phone", 25000)
    );
  }

  getPorducts(): Product[] {
    return this.products;
  }
}
```

- `SimpleDataSource` üzerinden `getProducts();` dersek kaynak bize direkt private üye `private products: Array<Product>;` gelecek.
- Reminder:
  - `throw new Error("Method not implemented.");` hata fırlat anlamına gelir.
- Reminder:
  - Private, dışarıdan ulaşılamayacağını sadece class'ı içerisinde işlem yapılabilir.
- Reminder:
  - indexOf(); Metohd: Değerin konumunu döndürür. Değer bulunamazsa indexOf() yöntemi -1 değerini döndürür. Büyük/küçük harfe duyarlıdır.
- Reminder:
  - splice() ekleme:
    - ` this.products.splice(index, 1, product);` Verilen index'ten Îtibaren 1 elemanın yerine aldığımız product ekliyoruz.
  - splice() kaldırma:
    - `this.product.splice(index, 1);` Verilen indexten Îtibaren 1 ürünü sileriz.
- Reminder:
  - `let result;` Burada bir result tanımlamış olduk.
- Reminder:
  - Terminal üzerinden görmek için adımlar:
    - 1- tsc dosyaAdi.ts
    - 2- node dosyaAdi.js
    - Her eklene işledmden sonra bu adımları yapmamız gerekli.
- Reminder:
  - Terminal:
    - Terminal içide yapılan `cls` yazarsanız önceki işlemleri temizler.
    - `cd klasorAdi` ile klasörün içine geçebilirsin.
