// Storage Controller
const StorageController = (function(){

    

})();


// Product Controller
const ProductController = (function(){

    //private
    //constructor yarattık 
    const Product = function (id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }

    const data ={
        products :[
            {id:0, name:"Apple", price:5},
            {id:1, name:"Orange", prcie:3},
            {id:2, name:"Cucumber",price:2}
        ],
        selectedProduct: null, // seçilen ürün en başta null olacak
        totalPrice: 0 // başlangıçta fiyat toplamı
    }

    //public
    return{

        getProducts: function(){
            return data.products;
        },
        getData: function(){
            return data;
        }
    }


})();


// UI Controller 
const UIController = (function(){

    
})();


// App Controller 
const App= (function(ProductCtrl,UICtrl){ 

   // bunları app modül içinde kullanalım şimdi
  return {
      init: function(){
          console.log("Starting Shopping Basket App...");

          const products = ProductController.getProducts(); // method'u çağırdık 
          console.log(products);  // kontrol amaçlı baktık 

          // UICtrl.createProductList(products); bunu da bir sonraki kısımda anlatalım

      }
  }

})(ProductController,UIController); 

App.init();

