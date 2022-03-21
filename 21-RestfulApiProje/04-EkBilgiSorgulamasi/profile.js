class Profile{
    constructor(){
        this.clientid= "",
        this.clientSecret=""
    }

    async getProfile (username){
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)

        const profile = await profileResponse.json();

        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`); // [0] alma nedenimiz 2.klasör app.js dosyası içindeki ile aynı mantık 

        const todo = await todoResponse.json();


        return {
            profile,
            todo
        }
    }

}