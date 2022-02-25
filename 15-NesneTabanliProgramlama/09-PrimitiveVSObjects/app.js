var a = 10;

var b=a;

console.log(a);

console.log(b);

//---------------------------

var obj1={
    name:"ozan",
    age:10
}

var obj2=obj1;

obj1.age=12; // obj1 ve obj2 de değişti ama biz tek obj1 çıkarmıştık

console.log(obj1);

console.log(obj2);

//-------------------------------------

var num=50; // bu değişmedi 

var account={
    name:"nida",
    accountNumber:"123456789"
}

function update(a,b){
    a=100; // kopaysının değeri 100 e eşitlendi // num ile alakası yok sadece değer ataması var
    b.accountNumber="987654321";   // account adresini b yerine atadık // b yerine yapacağımız herhangi bir değişiklik aslında axxount etkiler çünkü aynı adresi temsil  eder
}

update(num,account);

console.log(num);

console.log(account);

//------------------------------------------------------

var products=[
    {name:"product name",price:"9999"},
    {name:"product name",price:"9999"},
    {name:"product name",price:"9999"},
    {name:"product name",price:"9999"},
    {name:"product name",price:"9999"},
    {name:"product name",price:"9999"},
    {name:"product name",price:"9999"},
    {name:"product name",price:"9999"},
    {name:"product name",price:"9999"},
    {name:"product name",price:"9999"},
    {name:"product name",price:"9999"},
]

function filterProducts(prds){   
    // buraya value olarak gelir referance veya adres kopyalaması olarak değil 
    // yani products vve prds birlikte tutulmuş olur 
    // bellekte çift tutuluyor olacak
    // products içindekiler artı bir obje içinde bir aynı değer daha tutulacaktı
    // prds üzerinden işlem yapılır ama biz orjinal liste üzerinden işlem yapılmasını isteriz
    // istediğimiz prds üzerinden yapılan değişiklik products üzerinden yapılsın isteriz
    // boşuna verilerin kopyasının oluşmasını gerek yok
    
}

filterProducts(products);

 /* 

!                                                       REMINDER

    ? Primitive: 
        ! String
        ! number
        ! boolean
        ! undefined
        ! null
        ! symbol
    * Primitive Tanım:
        * Bir parametre gönderiyorsak bu  değer kopyalanarak gider.
! ---------------------------------------------------------------------------------------------------------
    ? Reference:
        ! array
        ! object
        ! function
        ! map
        ! set
    * Reference Tanım:
        * Bir veri herhangi bir metoda parametre olarak gösterildiğinde nesne reference olarak gönderilir.
 */

