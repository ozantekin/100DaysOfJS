let myObj = {
    url:"https://randomuser.me/api/?results=5", // ?result=5 ile 5 tane kullanıcı bilgisi karşımıza gelir
    
}

let request = obj => {
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open("GET",obj.url);

        if(xhr.headers){
            Object.keys[obj.headers]
            .forEach(key => {
                xhr.setRequestHeader(key,obj.headers[key]);
            });
        }
        xhr.onload = ()=> {
            if(xhr.status >= 200 && xhr.status<300){ 
                resolve(xhr.response);
            }else{
                reject (xhr.statusText);
            }
        }

        xhr.onerror = ()=>{
            reject(xhr.statusText);
        }
        
        xhr.send(obj.body);
    });
}

let buildHtml = function (data){
    let users = JSON.parse(data);

    let html="";

    users.results.forEach(user=>{
        //console.log(user);

        html+=`
        <div>
        <img src="${user.picture.medium}">
        <div>
        ${user.name.title} ${user.name.first} ${user.name.last}
        </div>
        </div>
        `;

    });

    document.querySelector("#users").innerHTML=html;

    //console.log(users.results);

    return Promise.resolve("HTML is loaded")
}

request(myObj)
    .then(buildHtml) //data parametresini buildHtml gönderdik sonra buildHtml çağırdık
    .then(msg =>{ // yakaldık sonra msg yazdırdık
    console.log(msg);        
    })
    .catch(error=>{
        console.log(error);
    });