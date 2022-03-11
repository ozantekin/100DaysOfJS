document.querySelector("#getOne").addEventListener("click",getOne);

document.querySelector("#getAll").addEventListener("click",getAll);

document.querySelector("#postData").addEventListener("click",postData);

function getOne(){
    // buradan gelen değeri direkt buraya göndermek için html dosyası içinde input id kullnacağız.
    var id=document.getElementById("postid").value;
    var url ="https://jsonplaceholder.typicode.com/posts/"+id;
    var xhr = new XMLHttpRequest();
    //var url = "https://jsonplaceholder.typicode.com/posts/1"; // 1 dersek 1.post gelir. hangi rakamı verirsek o post gelir
   

    xhr.open("GET",url,true);
    xhr.onload = function (){
        if (this.status===200){
            var post = JSON.parse(this.responseText);

            var html="";
                html += ` 
                <div class="card mb-2">
                    <div class="card-header">
                    ${post.id} - ${post.title}
                    </div>
                        <div class="card-body">
                        <blockquote class="blockquote mn-0">
                        <p class="card-text">${post.body}</p>
                       </blockquote>
                    </div>
              </div>
                `;
           
            document.querySelector("#results").innerHTML=html;
        }
    }
    xhr.send();
}

function getAll () {

    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr= new XMLHttpRequest();

    xhr.open("GET",url,true);
    xhr.onload = function (){
        if (this.status === 200){
           // console.log(this.responseText); // 100 tane postu yazdırır

           // daha güzel yazdıralım
           var posts = JSON.parse(this.responseText);

           var html="";  // reminder: başta boş çıktı alırız

           posts.forEach(post => {
               // += yapmamız gerekiyor ki her bir kart html div'i içerisine gelsin
            html += ` 
            <div class="card mb-2">
                <div class="card-header">
                 ${post.title}
                </div>
                    <div class="card-body">
                    <blockquote class="blockquote mn-0">
                    <p class="card-text">${post.body}</p>
                   </blockquote>
                </div>
          </div>
            `;
           });
           document.querySelector("#results").innerHTML=html;
        }
    }
    xhr.send();

}

function postData(){
    const data = {
        userId:1,
        title: "new title",
        body:"new body"
    }

    //console.log(data); // object halinde geleceğini göreceğiz ama bunu text halinde almamız lazım
    var json =JSON.stringify(data); // çevirme işlemi tamamlandı
    //console.log(json); 

    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();
    xhr.open("POST",url,true) // artık get değil çünkü bir bilgi gönderiyoruz o yüzden post'u kullanmamız gerekiyor
    xhr.setRequestHeader("Content-type","application/json; Charset=utf-8"); // server'e type belli etme işlemi
    xhr.onload = function (){
        //console.log(xhr.status); // 201 => created 
        //console.log(xhr.readyState); // 4 => finished

        if(xhr.status===201 && xhr.readyState===4){
            var post = xhr.responseText;
            console.log(post);
        }
    }
    xhr.send(json);
}