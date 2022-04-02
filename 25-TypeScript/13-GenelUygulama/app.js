"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService();
var result;
result = _productService.getProducts(); // bütün ürünler
result = _productService.getById(2); // 2 numaralı ürün |iPhone 12
// ürün ekelme
var p = new Product_1.Product();
p.name = "iPhone 11";
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
var p1 = new Product_1.Product();
p1.id = 1;
p1.name = "iPhone 11 Pro Max ";
p1.price = 23000;
p1.category = "Phone";
_productService.saveProduct(p1);
result = _productService.getProducts();
console.log(result);
