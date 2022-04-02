export class Product {
    constructor(
        public id? : number,
        public name? : string,
        public category? : string,
        public price? : number
        ){ }
}

let p = new Product(); // içine id veya name ... parametreleri gönderebiliriz
