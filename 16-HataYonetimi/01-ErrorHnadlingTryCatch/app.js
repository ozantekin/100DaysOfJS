// ReferenceError
//TypeError
//SyntaxError
//URIError

//Error

try{
    console.log(myFunction());
}
catch(a){
    console.log(a); // hatanın türü ve mesajı yazılır
    console.log(a.message);
    console.log(a.name); 
    console.log(a instanceof ReferenceError);
    console.log(a instanceof TypeError);
    console.log(typeof a);
}

/* 
! hata alabileceğimiz kısmı try içine alırız
! hata olduğunda ise yapılacak işlemleri catch içine alırız
*/

//console.log(myFunction()); // ReferenceError alırız

var user = {
    name:"ozan tekin"
}

try{
console.log(user.name);
console.log(user.email); // undefined olarak çıktı alırız bize olmadığınızsöyler bunu hata olarak algılatabiliriz.
if(!user.email){
    throw new SyntaxError("user has no email"); 
}
}
catch (a){
console.log(a);
}

var member={
    name:"nida tekin"
}

try{
console.log(member.email);
if(!member.email){
    throw new Error("member no email");
}
}
catch(a){
console.log(a);
}
finally{
console.log("finally block");
}

/* 
    ! try kısmında hata varsa catch çalışır finally de çalışabilir 
    ! try kısmında hata yoksa catch çalışmaz ama finally kısmı çalışabilir
    * finally her zaman çalışır 

*/