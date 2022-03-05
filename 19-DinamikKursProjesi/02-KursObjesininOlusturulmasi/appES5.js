// ? Course büyük harfle olması önemli çünkü bu bizim için bi sınıfa karşılık geliyor.
function Course(title,instructor,image){
    this.title=title;
    this.instructor=instructor;
    this.image=image;
}

document.getElementById("new-course").addEventListener("submit",function(e){

    const title=document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value;

    // console.log(title,instructor,image);
    /*
    * Bilgilerimizin gelip gelmediğine bakcağız.
    * Bunu her aşamada yapmamız önemli çünkü ilerleyen aşamalarda hataların nereden geldiğini saptamak daha zor olacaktır. 
     */

    // create course object
    const course = new Course(title,instructor,image);
    /* 
    Buradan aldığımız bilgilerle yapabileceğimiz işlemler
    save to database 
    show to ui 
    gibi... 
    ancak bu işin yeri burası değil çünkü kodlar çok karmaşık hale gelir.
    İşlemleri parçalamamız gerekli.
    database ekliyeceksek function açacağız
    ui için ayrı bir bölme açacağız gibi
    */

    console.log(course);

    

    e.preventDefault(); // reminder: burada submit olayını kesiyoruz. Kesmezsek, sayfa submit olur sürekli. (resresh)
});