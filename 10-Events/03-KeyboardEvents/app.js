const input =document.querySelector("#txtTaskName");

const form=document.querySelector("form");

const select=document.querySelector("#select");

// basınca geçreçkleşenler
//input.addEventListener("keydown",eventHandler); // tuşa bastığın  an 
//input.addEventListener("keyup",eventHandler);  // tuştan elini kaldırdığın an
//input.addEventListener("keypress",eventHandler);

// input içerisine geldiğin an gerçekeleşenler
//input.addEventListener("focus",eventHandler); // focus olunca | background focus olunca gelir
//input.addEventListener("blur",eventHandler); // çıkınca | background çıkınca gelir

//input.addEventListener("cut",eventHandler); // input içine değer yazıp kesince 
//input.addEventListener("paste",eventHandler); // input içine değer yapıştırınca

input.addEventListener("select",eventHandler);

form.addEventListener("submit",eventHandler); // formun bir action olmadığından dolayı sayfa refresh olur  | action="register.aspx" yazarsak bizi oraya yönlendirir

select.addEventListener("change",eventHandler); // değer değiştiği an gerçekleşir

function eventHandler(e){
    console.log("event type ;"+e.type);

    //console.log("key code :"+e.keyCode); // bastığımız tuşun kodunu verir  | keyboard key codes yazarak bulabilirsiniz a:65 gibi
    //console.log("value :"+e.target.value); // bu da bize değeri gösterir |keydown ile alamayız keyup ile alabiliriz

    //e.target.style.backgroundColor="red"; 
    e.target.style.backgroundColor="yellow";

    e.preventDefault(); // refresh durdurulur

    console.log(e.target.value);

};