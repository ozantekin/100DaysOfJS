"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getPorducts().forEach(function (p) { return _this.products.push(p); });
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0]; // yukarıda gönderdiğimiz id'ye karşılık gelen ilk elemanı alalım 
    };
    ProductService.prototype.getProducts = function () {
        return this.products; // bütün listeyi döndürsün
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) { // yeni eklenmiş ürün
            product.id = this.generateId(); // bize rastgele bir tane eleman getirsin anlamına gelir 
            this.products.push(product);
        }
        else { // eğer ürünün bir i'Si varsa 
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            // eğer varsa bunu listenin üzerine tekrar ekleriz
            this.products.splice(index, 1, product); // verilen indexten itibaren 1 elemanın yerine aldığımız product ekliyoruz
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product); // yine aynı şekilde gönderdiğimiz product'ın index içerisindeki numarasını alalım
        if (index > 0) { // ürün liste içerisinde var anlamına gelir.
            this.products.splice(index, 1); // verilen indexten itibaren 1 ürünü sileriz
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) { // liste üzerine bakıyoruz |1 numaraya ait olan bir ürün var mı yok mu varsa 1 arttırsın 
            key++;
        }
        return key; // ne zaman bir eşleşme olmaz o zaman key bilgisini geri gönderelim
    };
    return ProductService;
}());
exports.ProductService = ProductService;
