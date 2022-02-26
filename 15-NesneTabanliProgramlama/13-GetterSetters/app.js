const person ={
    firstName: "Ozan",
    lastName:"Tekin",
    fullName: function(){
        return `${this.firstName} ${this.lastName}` // person yerine this kullanalım 
    }
}

//console.log(`${person.firstName} ${person.lastName}`); bunun yerine bir function oluşturalım 

console.log(person.fullName()); // reminder: method olduğu için parantez açıp kapatıyoruz

person.firstName="nida"; // fullname üzerinden ulaşmak istiyorsak 

console.log(person.fullName());

// fullNmae içerisne gönderdiğimiz değer ile firstNmae ve lastNmae değiştirelim uzun yol 

const person1 ={
    firstName: "Ozan",
    lastName:"Tekin",
    getfullName: function(){
        return `${this.firstName} ${this.lastName}` // person yerine this kullanalım 
    }, // virgül var dikkat
    setfullName: function(value){
        const parts =value.split(" "); // boşluklardan ayırırız
        this.firstName=parts[0]; // 1.kısım firstName kısmına gelir
        this.lastName=parts[1];  // 2.kısım lastName kısmına gelir 
    }
}

person1.setfullName("Yiğit Tekin");

console.log(person1.getfullName());

// fullNmae içerisne gönderdiğimiz değer ile firstNmae ve lastNmae değiştirelim kısa yol 

const person2={
    firstName:"ozan",
    lastName:"tekin",
    get fullName(){ // function şeklinde ama function keywırd olmadan yapacağız
        return `${person2.firstName} ${person2.lastName}`
    },
    set fullName(value){
        const parts = value.split[" "];
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
}

person.fullName="Eylül Tekin";

console.log(person2.fullName); // method şeklinde almayacağız o yüzden parantez yok 


// dışarıda tanımlayalım 

const person3 = {
    firstName:"ozan",
    lastName:"tekin"
}

Object.defineProperty(person3,"fullName",{
    
    get function(){
        return `${person3.firstName} ${person3.lastName}`
    },
    set function (value){
        const parts=value.split[" "];
        this.firstName=parts[0];
        this.lastName=[1];
    }
})

Object.defineProperty(person3,"age",{
    value:7, // sadeceokunabilir bir alan  değiştirilemez o yüzden
    writable :true // şimdi age değeri değiştirilebilir
})



person3.age=55; // bu değer etki etmez etki etmesi için writable:true verilmeli

console.log(person3);



/* 
! writable: false 
    * set method u çalışmayacak yani oluşturulamayacak.writable:true için ise tam tersi geçerli.
    * hiçbir şey yazmazsak default olarak writable:false alır.

? get ve set ne avantaj sağlar

    *age değerini tanımlayıp içine bir değer atamak istediğimiz zaman value kontrol edebilir.
    *vlue değerinin herhangi bir aşamada değerini kontrol edebiliriz.
    *örnek: yaş değişkinine negatif değer atamazsınız uyarısı verebilirsiniz.
    *değşikenleri get ve set mothodu ile istediğimiz şekilde yönetebiliriz.
*/
