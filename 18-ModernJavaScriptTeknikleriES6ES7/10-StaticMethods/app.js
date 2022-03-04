class personES6{
    constructor(name,occupation,yearOfBirth){
        this.name=name;
        this.occupation=occupation;
        this.yearOfBirth=yearOfBirth;
    }
    

    calculateAge(){
        return 2022-this.yearOfBirth;
    }

    static sayHi(){
        console.log("hello there");
    }
}

let ozan = new personES6 ("ozan","developer",2000);

console.log(ozan);

console.log(ozan.calculateAge());

personES6.sayHi();

console.log("-------------------");

//

class point {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    static distance(a,b){
        const dx= a.x - b.x; // (a.x) a içindeki x bilgisini almak için yaparız sonra b içindeki x bilgisin alırız
        const dy = a.y - b.y; // (a.y) a içindeki y bilgisini almak için yaparız sonra b içindeki y bilgisini alırız

        return Math.hypot(dx,dy);
    }
}

const d1 = new point(10,10); 

const d2 = new point (20,20); 

console.log(point.distance(d1,d2));


/*
 
    * static method o an içinde instance içinde oluşturulan herhangi bir değere ihtiyaç duymuyor.
    * oluşturduğumuz objeleri bu static mothod içine gönderiyoruz (d1,d2)
    * bu noktlar (d1,d2) üzerinden bir hesaplama yapılıyor static kısmında
    ! yani static çalıştırmak instancelar ile çalışmak değil 
    ! (o yüzden yukarıda ozan.sayHi yazmadık personES6.sayHi yazdık | burada da point.distance yazdık )
    
*/


