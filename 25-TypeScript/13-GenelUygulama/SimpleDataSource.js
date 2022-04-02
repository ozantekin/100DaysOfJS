"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "iPhone SE", "Phone", 11000), new Product_1.Product(2, "iPhone 12", "Phone", 15800), new Product_1.Product(3, "iPhone 13", "Phone", 17500), new Product_1.Product(4, "iPhone 13 Pro", "Phone", 25000));
    }
    SimpleDataSource.prototype.getPorducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
