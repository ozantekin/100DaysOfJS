// Storage Controller
const StorageController = (function(){

    // *projeden aldığımız belgeleri tarayıcı belleğine aktaracağımız kısım 

})();


// Product Controller
const ProductController = (function(){

    // *ürünlerle alakalı bütün işlemler burada yapılır

})();


// UI Controller 
const UIController = (function(){

    // * bilgilerimizi kullanıcıya gösterecek kısım | tamamen HTML etiketleri ile etkileşimde bulunacak kısım

})();


// App Controller 
const AppController= (function(ProductCtrl,UICtrl){ // burada oluşturduk 

    // *Bu ayrı modüllerin birleşerek ortaya çıkaracağı ana modül |ana modül içinde istediğimiz modülü kullanabileceğiz
    // * Dediğimiz gibi diğer modüller ana modüle bağımlı olacak örnek: içinde product controller burada kullanabiliriz -> ProductCtrl parametre olarak verebiliriz veya diğer controller'i

})(ProductController,UIController); // burada beklenenler yazılır

//------------------------------------------

// App Controller Örnek
const AppControllerNew= (function(ProductCtrl,UICtrl){ 

   // product controller içindeki herhngi bir elemana ProductCtrl.    ile burada ulaşabileceğiz. Tabi ProductController içinde bulunan private ve public alanlara dikkat ederek. 

})(ProductController,UIController); 

// Product Controller Örnek
const ProductControllerNew = (function(){

    // private area

    return{
        // public area
    }

})();