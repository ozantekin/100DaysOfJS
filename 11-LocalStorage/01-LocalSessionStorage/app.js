// local storage
let val;

let socialMedia=["twitter ozantekindev", "medium ozantekindev","GitHub ozantekin"];
//setitem
const firstName=localStorage.setItem("FirstName","ozan");
const twitter=localStorage.setItem("twitter","ozantekindev");

console.log(localStorage);

//getitem
val=localStorage.getItem("FirstName");
val=localStorage.getItem("twitter");

console.log(val);

//remobeitem
localStorage.removeItem("FirstName");

//clear 
// bütün elemanları siler 
//localStorage.clear();

//set array
localStorage.setItem("social media",socialMedia); // string olarak yazar 
localStorage.setItem("social media", JSON.stringify(socialMedia)); // object olarak yazar

val=JSON.parse(localStorage.getItem("social media"));

console.log(val, typeof val);


// local storage tarayıcı kapanıp tekrar açılsa bile kayıtlı kalır. saklı tutar

// session storage

const medium=sessionStorage.setItem("medium","ozantekindev");
const superpeer=sessionStorage.setItem("superpeer","ozan tekin");

console.log(sessionStorage);