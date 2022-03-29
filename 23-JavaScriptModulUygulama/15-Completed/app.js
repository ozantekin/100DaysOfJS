// Storage Controller
const StorageController = (function(){

    return{

        storeProduct: function(product){

            let products;

            if(localStorage.getItem("products") == null){  

                products= []; 
                products.push(product);

            }else{ // başta null değil
                products =JSON.parse( localStorage.getItem("products"));
                products.push(product);
            }

            localStorage.setItem("products",JSON.stringify(products)); 
        },

        getProducts: function(){ 

            let products;

            if(localStorage.getItem("products")==null){ 

                products=[];

            }else{ 

                products=JSON.parse(localStorage.getItem("products"));

            }

            return products;
        },
        updateProduct: function (product){
            let products = JSON.parse(localStorage.getItem("products"));

            products.forEach(function(prd,index){ 
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
    const Product = function (id, name, price){
        this.id=id;
        this.name=name;
        this.price=price;
    }

    const data ={
        products : StorageController.getProducts(),
        selectedProduct: null, 
        totalPrice: 0 
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
            let product = null; 

            data.products.forEach(function(prd){ 
                if(prd.id==id){ 
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
            if(data.products.length>0){ 
                id = data.products[data.products.length-1].id+1;  
            }else{
                id=0;
            }

            const newProduct =  new Product (id,name,parseFloat(price)); 
            data.products.push(newProduct);
            return newProduct; 
        },
        updateProduct:function(name,price){
            let product = null;

            data.products.forEach(function(prd){ 
                if(prd.id == data.selectedProduct.id){
                    prd.name = name;
                    prd.price= parseFloat(price); 
                    product = prd; 
                }
            });


            return product;
        },
        deleteProduct: function(product){
            data.products.forEach(function(prd,index){
                if(prd.id == product.id){
                    data.products.splice(index,1);  
                }
            });
        },
        getTotal : function(){
            let total = 0;

            data.products.forEach(function(item){
                total += item.price;
            });

            data.totalPrice= total;
            return data.totalPrice;
        }
    }


})();


// UI Controller 
const UIController = (function(){

    const Selectors = { 
        productList: "#item-list",
        productLİstItems: "#item-list tr", 
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


            document.querySelector(Selectors.productList).innerHTML=html; 
        },
        getSelectors : function(){
            return Selectors; 
        },
        addProduct: function(prd){

            document.querySelector(Selectors.productCard).style.display="block"; 

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
        updateProduct: function(prd){ 
            
            let updatedItem = null; 

            let items = document.querySelectorAll(Selectors.productLİstItems);
            items.forEach(function(item){
                if(item.classList.contains("bg-success")){ 
                    item.children[1].textContent =prd.name;   
                    item.children[2].textContent=prd.price + ' $';
                    updatedItem=item;
                }
            });


            return updatedItem; 

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
        hideCards : function (){ 
            document.querySelector(Selectors.productCard).style.display="none"; 
        },
        showTotal : function (total) { 
            document.querySelector(Selectors.totalUsd).textContent = total;
            document.querySelector(Selectors.totalTl).textContent = total*14.85; 
        },
        addProductToForm : function (){
            const selectedProduct = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value=selectedProduct.name;
            document.querySelector(Selectors.productPrice).value=selectedProduct.price;
        },
        deleteProduct : function (){
            let items = document.querySelectorAll(Selectors.productLİstItems);
            items.forEach(function(item){ 
                if(item.classList.contains("bg-success")){
                    item.remove();
                }
            });  
        },
        addingState:function(item){ 
            UIController.clearSuccess(); 

            UIController.clearInputs(); 
            document.querySelector(Selectors.addButton).style.display="inline";
            document.querySelector(Selectors.updateButton).style.display="none";
            document.querySelector(Selectors.deleteButton).style.display="none";
            document.querySelector(Selectors.cancelButton).style.display="none";

        },
        editState:function(tr){ 

            

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

    const UISelectors=UICtrl.getSelectors(); 

    // load event listeners
    const loadEventListeners = function(){ 
        
        // add product event
        document.querySelector(UISelectors.addButton).addEventListener("click", productAddSubmit) 

        // edit product click
        document.querySelector(UISelectors.productList).addEventListener("click",productEditClick); 
        
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
            const newProduct = ProductCtrl.addProduct(productName,productPrice); 

            // add item to list
            UICtrl.addProduct(newProduct);

            // add product to local storage
            StorageCtrl.storeProduct(newProduct); 

            // get Total
            const total = ProductCtrl.getTotal();
            

            // show total
            UICtrl.showTotal(total);


            // clear input
            UICtrl.clearInputs();
        }

        


        e.preventDefault();

    }

    const productEditClick = function (e){ 

        
        if(e.target.classList.contains("edit-product")){
          

              const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

              //get selected product => bu bilgiyi bize ProductCtrl getirecek
              const product = ProductCtrl.getProductById(id);
              //console.log(product);


              // set current product 
              ProductCtrl.setCurrentProduct(product);

              // 
              UICtrl.clearSuccess();

              //add product controller 
              UICtrl.addProductToForm();

              //
              UICtrl.editState(e.target.parentNode.parentNode);




        }
        

        e.preventDefault();
    }

    const editProductSubmit = function (e){
       

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if(productName !== '' && productPrice !== ''){
            
            // update product
            const updatedProduct = ProductCtrl.updateProduct(productName,productPrice); 

            // update UI
            let item = UICtrl.updateProduct(updatedProduct);

            // get total
            const total = ProductCtrl.getTotal();

            // show total
            UICtrl.showTotal(total);

            // update storage
            StorageCtrl.updateProduct(updatedProduct);

            // adding state 
            UICtrl.addingState(); 

        }

        e.preventDefault();
    }

    const cancelUpdate = function (e){


    UICtrl.addingState();
    UICtrl.clearSuccess();

        e.preventDefault();
    }

    const deleteProductSubmit = function(e){

       // get selected product
       const selectedProduct = ProductCtrl.getCurrentProduct(); 

       // delete product
       ProductCtrl.deleteProduct(selectedProduct);

       // delete ui
       UICtrl.deleteProduct();

        // get total
        const total = ProductCtrl.getTotal();

        // show total
        UICtrl.showTotal(total);

        // delete from storage
        StorageCtrl.deleteProduct(selectedProduct.id);

        // normal ekleme durumuna geçilme evresi
        UICtrl.addingState();

        
        if(total == 0){ 
            UICtrl.hideCards();
        }
       


        e.preventDefault();
    }

  
  return {
      init: function(){
          console.log("Starting Shopping Basket App...");

          UICtrl.addingState();


          const products = ProductController.getProducts(); 
        

          // hide card
          if(products.length==0){ 
            UICtrl.hideCards();
          }else{

            UICtrl.createProductList(products); 

          }
            // get total
            const total = ProductCtrl.getTotal();

            // show total
            UICtrl.showTotal(total);

            // load event listeners
            loadEventListeners()
                    
        }
  }

})(ProductController, UIController, StorageController); 

App.init();

