import { Product } from "./Product";

export class SimpleDataSource {
    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product(1, "iPhone SE", "Phone", 11000),
            new Product(2, "iPhone 12", "Phone", 15800),
            new Product(3, "iPhone 13", "Phone", 17500),
            new Product(4, "iPhone 13 Pro", "Phone", 25000)
        )
    }

    getPorducts(): Product[]{
        return this.products;
    }
}

