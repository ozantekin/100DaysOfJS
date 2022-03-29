// Storage Controller
const StorageController = (function(){

    return{

        storeProduct: function(product){

            let products;

            if(localStorage.getItem("products") == null){  // başta null |getItem reminder: belirtilen Depolama Nesnesi öğesinin değerini döndürür.

                products= []; // daha önceden ürün yoksa boş bir object olarak tanımlayalım 
                products.push(product);

            }else{ // başta null değil
                products =JSON.parse( localStorage.getItem("products")); // string ifade yapmıştık şimdi json parse ile json object çevirdik
                products.push(product);
            }

            localStorage.setItem("products",JSON.stringify(products)); //reminder: gönderdiğimiz objectler string olması gerekiyor bunu JSON.stringify ile json stringine çevirdik
            // local stroge içerisinde uct adında yer açıp bu products oraya gönderiyoruz
        },

        getProducts: function(){ // product controller içindeki data da bulunan product kısmına ekliyoruz 

            let products;

            if(localStorage.getItem("products")==null){ // ürün yoksa boş 

                products=[];

            }else{ // varsa json parse ile okuyalım 

                products=JSON.parse(localStorage.getItem("products"));

            }

            return products;
        },
        updateProduct: function (product){
            let products = JSON.parse(localStorage.getItem("products"));

            products.forEach(function(prd,index){ // products üzeride foreach ile dönüyoruz
                if(product.id == prd.id){
                    products.splice(index,1,product);
                }
            });    

            localStorage.setItem("products",JSON.stringify(products));
        },

        deleteProduct: function(id){
            let products = JSON.parse(localStorage.getItem("products"));

            products.forEach(function(prd,index){
                if(id == prd.id){
                    products.splice(index,1);
                }
            });

            localStorage.setItem("products",JSON.stringify(products));
        }

    }

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
        products : StorageController.getProducts(),
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
        getProductById: function(id){
            let product = null; // ilk başta bulunmadı sayıyoruz

            data.products.forEach(function(prd){ // filter method'ta kullanabilirdik
                if(prd.id==id){ // gönderilen prd nin id yukarıdaki id ile eşit ise 
                    product= prd;
                }
            });

            return product;
        },
        setCurrentProduct : function (product){
            data.selectedProduct=product;
        },
        getCurrentProduct : function(){
            return data.selectedProduct;
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
        updateProduct:function(name,price){
            let product = null;

            data.products.forEach(function(prd){ // selected product içinde zaten ilgili objet bulunuyordu unutmayalım 
                if(prd.id == data.selectedProduct.id){
                    prd.name = name;
                    prd.price= parseFloat(price); // değeri number türüne çevirdik
                    product = prd; // product object'ini içerisine güncellediğimiz elemanı atıyoruz
                }
            });


            return product;
        },
        deleteProduct: function(product){
            data.products.forEach(function(prd,index){
                if(prd.id == product.id){
                    data.products.splice(index,1);   // splice(index,1) => belirtilen index değerinden itibaren 1 elemanı sil anlamına gelir
                }
            });
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
        productLİstItems: "#item-list tr", // item list altındaki tr'lere bu yöntem ile ulaşacağız
        addButton: ".addBtn",
        updateButton: ".updateBtn",
        deleteButton: ".deleteBtn",
        cancelButton: ".cancelBtn",
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
                      
                        <span class="lnr lnr-tag edit-product"></span>
                       
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
               
                <span class="lnr lnr-tag edit-product"></span>
                
            </td>
      </tr>

            `;

            document.querySelector(Selectors.productList).innerHTML += item;
        },
        updateProduct: function(prd){ // tbody yani item-list altındaki tr'lere ulaşmak istiyoruz o yüzden yukarıda selectors içine tanımlamamız işlerimizi kolaylaştırır
            
            let updatedItem = null; // başlangıç değeri

            let items = document.querySelectorAll(Selectors.productLİstItems);
            items.forEach(function(item){
                if(item.classList.contains("bg-success")){ // classlistler barındırıyorsa işlemi
                    item.children[1].textContent =prd.name;   //children: alt elemanlarında bulunan 1.index demekti yani product name
                    item.children[2].textContent=prd.price + ' $';
                    updatedItem=item;
                }
            });


            return updatedItem; // update edilen itemı geri gönderiyoruz

        },
        clearInputs :function(){
            document.querySelector(Selectors.productName).value="";
            document.querySelector(Selectors.productPrice).value="";

        },
        clearSuccess : function(e){
            const items = document.querySelectorAll(Selectors.productLİstItems);
            items.forEach(function(item){
                if (item.classList.contains("bg-success")){
                    item.classList.remove("bg-success");
                }
            });

        },
        hideCards : function (){ // başlangıçta hiç product yok o yüzden card gözükmesini istemiyoruz 
            document.querySelector(Selectors.productCard).style.display="none"; // daha sonra init fonksiyonun gidiyoruz
        },
        showTotal : function (total) { 
            document.querySelector(Selectors.totalUsd).textContent = total;
            document.querySelector(Selectors.totalTl).textContent = total*14.85; // 25/03/2022 dolar kuru 
        },
        addProductToForm : function (){
            const selectedProduct = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value=selectedProduct.name; // textContent olmaz çünkü bunlar value 
            document.querySelector(Selectors.productPrice).value=selectedProduct.price;
        },
        deleteProduct : function (){
            let items = document.querySelectorAll(Selectors.productLİstItems);
            items.forEach(function(item){ // foreach bize her bir eleman üzerinde dolaşma imkanı tanır 
                if(item.classList.contains("bg-success")){
                    item.remove();
                }
            });  
        },
        addingState:function(item){ // uyguluma ilk çalıştığı zaman bunu devreye sokmamız gerekiyor. Bunu init içinde yapıyoruz

            UIController.clearSuccess(); // aynı işlemi app içindeki cancel button için  de çağıralım 

            UIController.clearInputs(); // input kutularının ilk başta içi boş
            document.querySelector(Selectors.addButton).style.display="inline";
            document.querySelector(Selectors.updateButton).style.display="none";
            document.querySelector(Selectors.deleteButton).style.display="none";
            document.querySelector(Selectors.cancelButton).style.display="none";

        },
        editState:function(tr){ // bunu da app içinde yapıyoruz

            

            tr.classList.add("bg-success");
            document.querySelector(Selectors.addButton).style.display="none";
            document.querySelector(Selectors.updateButton).style.display="inline";
            document.querySelector(Selectors.deleteButton).style.display="inline";
            document.querySelector(Selectors.cancelButton).style.display="inline";
        }
    }
    
})();


// App Controller 
const App= (function(ProductCtrl,UICtrl,StorageCtrl){ 

    const UISelectors=UICtrl.getSelectors(); // selectors'a app içinden ulaşılabilir yaptık 

    // load event listeners
    const loadEventListeners = function(){ // burada oluştuduğumuz event'i init içinde public yapcağız
        
        // add product event
        document.querySelector(UISelectors.addButton).addEventListener("click", productAddSubmit) // function(e){} direkt burada yazmak yerine

        // edit product click
        document.querySelector(UISelectors.productList).addEventListener("click",productEditClick); // submit yerine click yapacağız

        // edit product submit
        document.querySelector(UISelectors.updateButton).addEventListener("click",editProductSubmit);

        // cancel button click
        document.querySelector(UISelectors.cancelButton).addEventListener("click",cancelUpdate);

        // delete button click
        document.querySelector(UISelectors.deleteButton).addEventListener("click",deleteProductSubmit);

    }

    const productAddSubmit = function(e){

        const productName = document.querySelector(UISelectors.productName).value;

        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if(productName!=="" && productPrice!==""){
            //  add product 
            const newProduct = ProductCtrl.addProduct(productName,productPrice); // bu işlem için product controller içine gidiyoruz (public yani return kısmına)
            // console.log(newProduct); // kontrol amaçlı yapıyoruz

            // add item to list
            UICtrl.addProduct(newProduct);

            // add product to local storage
            StorageCtrl.storeProduct(newProduct); // yeni oluşturduğumuz ürünü storeProduct içinde saklayalım 

            // get Total
            const total = ProductCtrl.getTotal();
            //console.log(total);   // product controller içinde yaptığımız kısmı kontrol ediyoruz

            // show total
            UICtrl.showTotal(total);


            // clear input
            UICtrl.clearInputs();
        }

        // kontrol ediyoruz
        //console.log(productName,productPrice);


        e.preventDefault();

    }

    const productEditClick = function (e){ // click diye güncelledik

        //console.log("Test") // elemanın neresine tıklarsak tıklayalım bu çıktıyı alırız. Biz button'a tıkladığımız zaman işlemin gerçekleşmesini istiyoruz bunu classList.contains("edit-product") ile çözüyoruz

        if(e.target.classList.contains("edit-product")){
            //console.log("Icon clicked"); 

            /* 
            console.log(e.target);
             id bilgisine gitmemiz gerek o yüzden buradan nasıl gideceğimize bakalım.
               biz şu anda iconun bulunduğu spandayız
               parentNode ile bir dış öğeye geçeriz => td
               şimdi 3 adım geriye gitmemiz gerek => previous node
            */

              // console.log(e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent); //previousSibling deseydik text node işin içine katılır o yüzden elemnt ekledik 

              const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

              //get selected product => bu bilgiyi bize ProductCtrl getirecek
              const product = ProductCtrl.getProductById(id);
              //console.log(product);


              // set current product 
              ProductCtrl.setCurrentProduct(product);

              // birden fazla ürün olduğunda aynı anda edit bg-success  kaldırıyoruz. Aynı anda bg-success olmak yerine Geçiş yapar diğer editlenecek ürüne
              UICtrl.clearSuccess();

              //add product controller 
              UICtrl.addProductToForm();

              // nerede olduğmuza bakıyoruz
              //console.log(e.target.parentNode.parentNode); // tr geldik istediğimiz de tr

              //
              UICtrl.editState(e.target.parentNode.parentNode);




        }
        

        e.preventDefault();
    }

    const editProductSubmit = function (e){
        //console.log("update button cilcked");

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if(productName !== '' && productPrice !== ''){
            
            // update product
            const updatedProduct = ProductCtrl.updateProduct(productName,productPrice); // şimdi bunu product controller içinde kullanacağız 

            // update UI
            let item = UICtrl.updateProduct(updatedProduct);

            // get total
            const total = ProductCtrl.getTotal();

            // show total
            UICtrl.showTotal(total);

            // update storage
            StorageCtrl.updateProduct(updatedProduct);

            // adding state geri gönderiyoruz işlemler sonrası
            UICtrl.addingState(); // ui içindeki adding state gitememiz gerek. bg-success kaldırıyoruz |buna artık gerek kalmadı ui controller içinde clearSuccess ile hallettik 

        }

        e.preventDefault();
    }

    const cancelUpdate = function (e){

    //console.log("cancel button");    test ettik 

    UICtrl.addingState();
    UICtrl.clearSuccess();

        e.preventDefault();
    }

    const deleteProductSubmit = function(e){

       //console.log("delete button"); test ettik

       // get selected product
       const selectedProduct = ProductCtrl.getCurrentProduct(); // product controller içinde tanılamıştık

       // delete product
       ProductCtrl.deleteProduct(selectedProduct);

       // delete ui
       UICtrl.deleteProduct();

       // silme işlemi bitti şimdi total kısmına geldik
        // get total
        const total = ProductCtrl.getTotal();

        // show total
        UICtrl.showTotal(total);

        // delete from storage
        StorageCtrl.deleteProduct(selectedProduct.id);

        // normal ekleme durumuna geçilme evresi
        UICtrl.addingState();

        // içerideki bütün ürünler silinince ekranda kalan card kaldırma
        if(total == 0){ // bunun ürün sayısını sayarakta yapmıştık ikisi de geçerlidir burada farklılık olması amacıyla bunu tercih ettim
            UICtrl.hideCards();
        }
       


        e.preventDefault();
    }

   // bunları app modül içinde kullanalım şimdi
  return {
      init: function(){
          console.log("Starting Shopping Basket App...");

          UICtrl.addingState();


          const products = ProductController.getProducts(); // method'u çağırdık 
          // console.log(products);  // kontrol amaçlı baktık 

          
          if(products.length==0){ // hide card
            UICtrl.hideCards();
          }else{

            UICtrl.createProductList(products); 

          }

           //load event listeners
           loadEventListeners();
           
      }
  }

})(ProductController, UIController, StorageController); 

App.init();

