// course class
class Course {
    constructor(title,instructor,image){
        this.courseId  = Math.floor(Math.random()*10000);// çarpım yanındaki değer ne kadar artarsa aynı rakam çıkma olasılığı o kadar azalır
        /* 
        Normalde bu kullanılmıyor tabi biz sadece frontend çalıştığımız için böyle yapıyoruz
        mongodb otomatik olarak üretiyor ama backend kısmına girmiyoruz
        */
        this.title=title;
        this.instructor=instructor;
        this.image=image;
    }
}


// ui class
class UI{

    addCourseToList(course){
        
        const list = document.getElementById("course-list");

        var html = `
        <tr>
            <td> <img src="image/${course.image}"/> </td>
            <td> ${course.title} </td>
            <td> ${course.instructor}</td>
            <td> <a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete"> Kaldır </a> </td> 
        </tr>
        `; // son td içindaki a'ya id data-id ekledik

        list.innerHTML +=html;
    }

    clearControls(){
        
        const title = document.getElementById("title").value="";
        const instructor=document.getElementById("instructor").value="";
        const image=document.getElementById("image").value="";

    }

    deleteCourse(element){
       
        if(element.classList.contains("delete")){
            element.parentElement.parentElement.remove();
            return true; // gelen kısmın her noktasına basıldığı zaman uyarı çıkmasını önlemek için yaptık aşağıda da if ile devam edeceğiz (en alt)
        }

    }

    showAlert(message,className){
       
        var alert = `
        <div class ="alert alert-${className}">
            ${message}
        </div>
        `;

        const row = document.querySelector(".row");
        row.insertAdjacentHTML("beforebegin",alert);

        setTimeout(() => {
        document.querySelector(".alert").remove();
        }, 3000);

    }

}


// storage class
class Storage{

    // bilgileri alıp getirecek
    static getCourses(){
        let courses;

        if(localStorage.getItem("courses")===null){
            courses=[];
        }else{
            courses = JSON.parse(localStorage.getItem("courses"));
            /* 
            JSON.parse ile json stringinden json object çeviriyoruz
            eklediğimiz sırada ise JSON.stringify ile json string çeviriyoruz 
            */
        }

        return courses;
    }


    // bilgileri bize gösterecek (ui araclığıyla)
    static displayCourses(){
        const courses = Storage.getCourses();

        courses.forEach(course => {
            const ui = new UI();
            ui.addCourseToList(course);
        });
    }

    static addCourse(course){
        const courses=Storage.getCourses();
        courses.push(course);
        localStorage.setItem("courses",JSON.stringify(courses));
    }

    static deleteCourse(element){
        if(element.classList.contains("delete")){
            const id = element.getAttribute("data-id");
            //console.log(id); Doğru adımdamıyım diye baktım
            //console.log(element); Doğru adımdamıyım diye baktım

            const courses = Storage.getCourses();

            courses.forEach((course,index)=>{
                if(course.courseId==id){
                    courses.splice(index,1); // hangi indexte ise  o index üzerinden 1 elemanı sil
                }
            });

            localStorage.setItem("courses",JSON.stringify(courses));
        }
    }
}

document.addEventListener("DOMContentLoaded",Storage.displayCourses);

document.getElementById("new-course").addEventListener("submit",function(e){
    
    const title=document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value;

    // create course object
    const course = new Course(title,instructor,image);

    // create UI
    const ui = new UI();

    if(title==="" || instructor==="" || image===""){
        
        ui.showAlert("Lütfen formu eksiksiz bi şekilde tamamlayın","warning")
        // 1.kısım => showAlert içindeki message parametresi
        // 2.kısım => showAlert içindeki className parametresi (warning) (alert-warning) 
        
    }else{

        // add course to list
        ui.addCourseToList(course);

        // save to local storage
        Storage.addCourse(course);

        // clear controls
        ui.clearControls();

        ui.showAlert("Kurs eklendi","success");

    }
    
    e.preventDefault();
});

document.getElementById("course-list").addEventListener("click",function(e){
    
    const ui= new UI();

    // delete course
    if(ui.deleteCourse(e.target)==true){ // if içine aldık 
    // delete from local storage
    Storage.deleteCourse(e.target);

    ui.showAlert("Kurs silindi","danger");
    }
});

