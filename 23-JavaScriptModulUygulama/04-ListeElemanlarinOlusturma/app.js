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
            {id:1, name:"Apple", price:5},
            {id:2, name:"Orange", price:3},
            {id:3, name:"Cucumber",price:2},
            {id:3, name: "Milk", price:4}
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
// reminder: UI modul bizim datalarımız alıp HTML  sayfasında gösterecek
const UIController = (function(){

    /*
        - oluşturmuş olduğumuz document.querySelector("#item-list").innerHTML=html; bu yapı için bunu birçok yerde kullanacağız  oyzüden bunu bir yerden tanımlayıp bir yerden kontrol etmek çok daha basit olur
        - ui contorller içinde hangi elemanla çalışırsak çalışalım tanımlamaları burada yapmamız işimizi basitleştirir
    */

    const Selectors = { // ileriki günlerde item-list kısmını değiştirdiğimiz zaman sadece buradan güncellememiz yeterli olacak
        productList: "#item-list"
    }

    return {
        createProductList : function(products){
            let html="";

            products.forEach(prd => {

                html+=`

                <tr>
                    <td>${prd.id}</td>
                    <th>${prd.name}</th>
                    <td>${prd.price} $</td>
                    <td class="text-end">
                        <button type="submit" class="btn btn-success btn-sm">
                        <span class="lnr lnr-tag"></span>
                        </button>
                    </td>
              </tr>
                `;

            });


            document.querySelector(Selectors.productList).innerHTML=html; // buradan alacağımız bilgileri queryselector'da belirdittiğimiz yere aktarırız
        },
        getSelectors : function(){ // ui dışında bu selectorlara ihtiyacımız olur diye buraya da ekliyouz. 
            return Selectors; // selectors bilgilerimizi buradan dışarı verir
        }
    }
    
})();


// App Controller 
const App= (function(ProductCtrl,UICtrl){ 

   // bunları app modül içinde kullanalım şimdi
  return {
      init: function(){
          console.log("Starting Shopping Basket App...");

          const products = ProductController.getProducts(); // method'u çağırdık 
          // console.log(products);  // kontrol amaçlı baktık 

           UICtrl.createProductList(products); 

      }
  }

})(ProductController,UIController); 

App.init();

