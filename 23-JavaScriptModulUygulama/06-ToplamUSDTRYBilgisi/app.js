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
        products :[ /* Buraya artık eklediğimiz bilgiler gelecek */ ], 
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
        },
        addProduct:function(name,price){
            let id;   
            if(data.products.length>0){ // >0 bize önceden içinde eleman var olduğunu gösterecek
                id = data.products[data.products.length-1].id+1;  // data.products.length-1 => ör: içinde 4 eleman varsa bunun 1 eksiği yeni gelenin index numarasına eşit olacak
            }else{
                id=0;
            }

            // constructor oluşturuyoruz
            const newProduct =  new Product (id,name,parseFloat(price)); // parsefloat ile number yaptık ondalıklı sayıları da işin içine katsın | id+1 ile de index numarası 1 eksik olduğu için +1 ekledik 
            data.products.push(newProduct);
            return newProduct; // daha sonradan kullanabilmemiz için geri göderdim 
        },
        getTotal : function(){
            let total = 0; // başlangıçta 0

            data.products.forEach(function(item){
                total += item.price;
            });

            data.totalPrice= total;
            return data.totalPrice;
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

    const Selectors = { // ileriki günlerde kısımları değiştirdiğimiz zaman sadece buradan güncellememiz yeterli olacak
        productList: "#item-list",
        addButton: ".addBtn",
        productName: "#productName",
        productPrice: "#productPrice",
        productCard: "#productCard",
        totalTl: "#total-tl",
        totalUsd: "#total-usd"

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
        },
        addProduct: function(prd){

            document.querySelector(Selectors.productCard).style.display="block"; // eleman geldiği zaman nona olan display block olsun istiyoruz

            var item = `
            
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

            document.querySelector(Selectors.productList).innerHTML += item;
        },
        clearInputs :function(){
            document.querySelector(Selectors.productName).value="";
            document.querySelector(Selectors.productPrice).value="";

        },
        hideCards : function (){ // başlangıçta hiç product yok o yüzden card gözükmesini istemiyoruz 
            document.querySelector(Selectors.productCard).style.display="none"; // daha sonra init fonksiyonun gidiyoruz
        },
        showTotal : function (total) { 
            document.querySelector(Selectors.totalUsd).textContent = total;
            document.querySelector(Selectors.totalTl).textContent = total*14.85; // 25/03/2022 dolar kuru 
         }
    }
    
})();


// App Controller 
const App= (function(ProductCtrl,UICtrl){ 

    const UISelectors=UIController.getSelectors(); // selectors'a app içinden ulaşılabilir yaptık 

    // load event listeners
    const loadEventListeners = function(){ // burada oluştuduğumuz event'i init içinde public yapcağız
        
        // add product event
        document.querySelector(UISelectors.addButton).addEventListener("click", productAddSubmit) // function(e){} direkt burada yazmak yerine

    }

    const productAddSubmit = function(e){

        const productName = document.querySelector(UISelectors.productName).value;

        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if(productName!=="" && productPrice!==""){
            //  add product 
            const newProduct = ProductController.addProduct(productName,productPrice); // bu işlem için product controller içine gidiyoruz (public yani return kısmına)
            // console.log(newProduct); // kontrol amaçlı yapıyoruz

            // add item to list
            UIController.addProduct(newProduct);

            // get Total
            const total = ProductController.getTotal();
            //console.log(total);   // product controller içinde yaptığımız kısmı kontrol ediyoruz

            // show total
            UIController.showTotal(total);


            // clear input
            UIController.clearInputs();
        }

        // kontrol ediyoruz
        //console.log(productName,productPrice);


        e.preventDefault();

    }

   // bunları app modül içinde kullanalım şimdi
  return {
      init: function(){
          console.log("Starting Shopping Basket App...");

          const products = ProductController.getProducts(); // method'u çağırdık 
          // console.log(products);  // kontrol amaçlı baktık 

          
          if(products.length==0){ // hide card
            UIController.hideCards();
          }else{

            UICtrl.createProductList(products); 

          }

           //load event listeners
           loadEventListeners();
           
      }
  }

})(ProductController,UIController); 

App.init();

