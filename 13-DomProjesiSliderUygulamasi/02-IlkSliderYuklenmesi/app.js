var links=[
    {
        name:"Twitter",
        Image:"image/twitter.png",
        link: "https://twitter.com/ozantekindev"
    },
    {
        name:"LinkedIn",
        Image:"image/linkedIn.png",
        link: "https://www.linkedin.com/in/ardilozantekin/"
    },
    {
        name:"Medium",
        Image:"image/medium.png",
        link: "https://medium.com/@ozantekindev"
    },
    {
        name:"Instagram",
        Image:"image/instagram.png",
        link: "https://www.instagram.com/ozantekindev/"
    },
    {
        name:"Youtube",
        Image:"image/youtube.png",
        link: "https://www.youtube.com/channel/UC86HNI5ZoebM7zqAVQt6ouw"
    }
];

var index=0;
document.querySelector(".card-title").textContent= links[index].name;
document.querySelector(".card-img-top").setAttribute("src",links[index].Image);
document.querySelector(".card-link").setAttribute("href",links[index].link);
