// Course constructor
// ? Course büyük harfle olması önemli çünkü bu bizim için bir sınıfa karşılık geliyor.
function Course(title,instructor,image){
    this.title=title;
    this.instructor=instructor;
    this.image=image;
}

// IU constructor
function UI(){
}

UI.prototype.addCourseToList=function (course) { 
    const list = document.getElementById("course-list");

    var html = `
    <tr>
        <td><img src="image/${course.image}"/></td>
        <td>${course.title}</td>
        <td>${course.instructor}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete"> Kaldır </a> </td> 
    </tr>
    `; // son td içindeki a'nın classına delete verdik

    list.innerHTML +=html;
 }

UI.prototype.clearControls=function(){ 
    const title = document.getElementById("title").value="";
    const instructor=document.getElementById("instructor").value="";
    const image=document.getElementById("image").value="";
 }

  // delete 
 UI.prototype.deleteCourse = function(element){
     if(element.classList.contains("delete")) { 
        element.parentElement.parentElement.remove();
        
     }
 }

 // show alert doldurma
 UI.prototype.showAlert=function(message,className){
     var alert = `
     <div class="alert alert-${className}">
     ${message}
     </div>
     `;

     const row = document.querySelector(".row");
     row.insertAdjacentHTML("beforebegin",alert);
     /* 
        beforebegin alma nedenimiz alert'i row etiketinin hemen üstüne eklemek istememiz

        ? Bu şekilde template string bir HTML  oluşturulduğu zaman insertAdjacentHTML kullanılabilir.
     */

    // gönderilen alert'leri belli bir süre sonra yok etme işlemi için
    setTimeout(()=> {
        document.querySelector(".alert").remove();
    },3000); // 3 saniye sonra siler
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

    // creat UI
    const ui = new UI();

    // UI with alert
    if(title==="" || instructor==="" || image===""){
        ui.showAlert("Lütfen Formu eksiksiz bir şekilde bir şekilde tamamlayın","warning"); // bootstrap içindeki alert class'ını kullandık => warning
        // ilk olarak çıkacak mesaj ikinci olarak çıkacak alert'in türü
    }else{

        // add course to list
        ui.addCourseToList(course);

        // clear controls
        ui.clearControls();

        //ekleme işlemi
        ui.showAlert("Kurs eklendi","success");
    }

    e.preventDefault(); // reminder: burada submit olayını kesiyoruz. Kesmezsek, sayfa submit olur sürekli. (resresh)
});

document.getElementById("course-list").addEventListener("click",function(e){
    const ui = new UI(); // tasarımal alakalı bir işlem olduğu için => // creat UI altında bulunanı kullanacağız.
    ui.deleteCourse(e.target);
    // alert
    ui.showAlert("Kurs silindi","danger");
});