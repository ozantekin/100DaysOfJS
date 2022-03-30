<h1 align="center"> Genel Notlar </h1>

- Konudan bağımsız: terminal cls ile sıfırlanır.

- Tarayıcda tanımladığımız bütün işlemler aslında window objesi içine gider.

- Window objesi global bir değişkendir.

- Ancak window objesini node içinde çalıştırmaya çalışırsak olmayacak.
  
```javascript
    // app.js
    console.log(window);
```

- Window objesi node uygulamalarda tanınan bir obje değil.

- Window objesi sadece tarayıcıya özel olan bir objedir.

- Message: İki farklı js dosyasında olmasına rağmen window objesi içeriside birleşirler.


- Tarayıcı açısından: 
  - App içindeki message ve logger içindeki url'ye window.message ve window.url ile ulaşabiliriz.
  - Her iki dosyaya da diyelim ki message ekledik o durumda index sayfasına son eklediğimiz script diğerini ezecektir.
  - Bunun önüne geçmek için önceki klasörlerde IIFE anlatmıştık. Module Patern hakkında daha fazla bilgi almak için <a href="https://medium.com/@ozantekindev/iife-nedir-d7c06bce5cd3"> buraya </a> tıklayabilirsiniz.
    - app.js içinde module1 ile module2 çakışma önüne geçer
 ```javascript

    // app.js

    var module1 = (function(){
    // function scope
    
    return{
        //public

    }
})();

 // logger.js

    var module2 = (function(){
    // function scope

    return{
        // public
        
    }
})();
```

- node açısından:
  - window değilde global objesi var 
  - node.js içerisinde bu modulleri nasıl bir araya getirceğiz:
    - global.module içerisine bütün module'leri tanımlayabiliriz.
    - Bu tanımlar bize IIFE içerisinden return ile geri gönderdiğimiz işleme benziyor.
  - IIFE içerisinde nasıl retrun varsa module içerisinde de `exports` vardır.

```javascript
    console.log(module);
```
- exports içine eklediğimiz değerler module üzerinden ulabilir alan olacak. 
- Dışarıya public olarak açmak istediğimiz kısımları exports içine eklememiz lazım.

- `exports` ile açar `require` ile başka dosyadan module yükleriz. (./ => bu bulunduğumuz klasy içinde anlamına gelir)