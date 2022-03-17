// text

function getText(){
    fetch ("text.txt")
    .then(response=> {
        //console.log(response);
        //console.log(response.text());
        
       return response.text();
    }).then(data=>{
        console.log(data);
    }).catch(error =>{
        console.log(error);
    })
}

getText();

//json

function getJson(){
    fetch("teams.json")
    .then (response=>{
        return response.json();
    }).then(data=>{
        console.log(data);
    }).catch(error=>{
        console.log(error);
    })
}

getJson();


// external api

function getExternalApi(){
    fetch("https://randomuser.me/api/?results=5")
    .then(data=>{
        return data.json();
    }).then(users=>{
        //console.log(users);
        //console.log(users.results);

        var html="";


        users.results.forEach(user => {
            //console.log(user);

            html+=`
            <div>
                <img src="${user.picture.medium}">
            
            <div>
                ${user.name.first} ${user.name.first}
            </div>
            </div>
            `;
        });

        document.querySelector("#users").innerHTML=html;

    }).catch(error=>{
        console.log(error);
    })
}

getExternalApi();

// POST request'ini kullanalım 

function postExternalApi(){
    const url = "https://jsonplaceholder.typicode.com/todos";

    var data = {
        method: "POST",
        body: JSON.stringify({
            userId: 1,
            title : "sample title",
            body :" sample body"
        }),
        headers: new Headers ({
            "content-type":"application-json"
        })
    }

    fetch(url,data)
        .then(response =>{
            console.log(response);
        });
    
}

postExternalApi();