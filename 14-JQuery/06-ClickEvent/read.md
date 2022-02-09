- Elemanların hepsinin HRML dökümanında yüklenmesini isteriz document ready method ile bunu kontrol ederiz
- 1.kullanımı
  - $(document).ready(function(){
  <br>
    console.log("ready!");
  <br>
  });
- 2.kullanımı
  -  $(function(){
  <br>
        console.log("ready!");
    <br>
   });
- click event:
  - $("selector").click(function(){
  <br>
console.log(`click event worked`);
  <br>
  });