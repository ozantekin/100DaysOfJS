document.querySelector("#getOne").addEventListener("click",getOne);

document.querySelector("#getAll").addEventListener("click",getAll);

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