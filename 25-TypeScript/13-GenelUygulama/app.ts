import { Product } from './Product';
import {ProductService} from './ProductService' ;

let _productService = new ProductService();

let result; 

result = _productService.getProducts(); // bütün ürünler
result= _productService.getById(2); // 2 numaralı ürün |iPhone 12


// ürün ekelme
let p = new Product();
p.name= "iPhone 11";
p.price = 13000;
p.category = "Phone";
/* Dikkat edersek yukarıda id vermedik 
saveProdcut(); 1 arttırarak sıralı bir şekilde ekliyordu zaten.
*/
 //_productService.saveProduct(p); // iphone 11 eklendi 
 //result = _productService.getProducts();



 // ürün silme
//_productService.deleteProduct(result); // 2 numaralı ürünü sileriz
//result = _productService.getProducts();





// ürün güncelleyelim
let p1 = new Product();

p1.id = 1;
p1.name= "iPhone 11 Pro Max ";
p1.price = 23000;
p1.category = "Phone";

_productService.saveProduct(p1);
result = _productService.getProducts();


console.log(result);