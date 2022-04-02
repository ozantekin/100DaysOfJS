import { IProductService } from "./IProductService";
import {Product} from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService {

    private dataSource: SimpleDataSource;
    private products: Array<Product>;

    constructor(){
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getPorducts().forEach(p => this.products.push(p));
    }

    getById(id: number): Product {
        return this.products.filter(p => p.id === id)[0]; // yukarıda gönderdiğimiz id'ye karşılık gelen ilk elemanı alalım 
    }
    getProducts(): Product[] {
       return this.products; // bütün listeyi döndürsün
    }
    saveProduct(product: Product): void {
        if(product.id == 0 || product.id == null){ // yeni eklenmiş ürün
            product.id = this.generateId(); // bize rastgele bir tane eleman getirsin anlamına gelir 
            this.products.push(product);
        }else{ // eğer ürünün bir i'Si varsa 
            let index;
            
            for(let i=0; i<this.products.length; i++){
                if (this.products[i].id === product.id){
                    index = i;
                }
            }

            // eğer varsa bunu listenin üzerine tekrar ekleriz
            this.products.splice(index, 1, product); // verilen indexten itibaren 1 elemanın yerine aldığımız product ekliyoruz
        }
    }
    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product); // yine aynı şekilde gönderdiğimiz product'ın index içerisindeki numarasını alalım
        if(index > 0){ // ürün liste içerisinde var anlamına gelir.
            this.products.splice(index,1); // verilen indexten itibaren 1 ürünü sileriz
        }

    }  
    
    private generateId(): number { // private yapalım çünkü buna dışarıdan ulaşmamıza gerek yok 
        let key =1;

        while(this.getById(key) !=null) {// liste üzerine bakıyoruz |1 numaraya ait olan bir ürün var mı yok mu varsa 1 arttırsın 
            key++;
        }

        return key; // ne zaman bir eşleşme olmaz o zaman key bilgisini geri gönderelim
    }
}