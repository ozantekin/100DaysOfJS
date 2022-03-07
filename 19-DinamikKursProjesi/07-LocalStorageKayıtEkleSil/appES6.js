// course class
class Course {
    constructor(title,instructor,image){
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
            <td> <a href="#" class="btn btn-danger btn-sm delete"> Kaldır </a> </td>
        </tr>
        `;

        list.innerHTML+=html;
    }

    clearControls(){
        
        const title = document.getElementById("title");
        const instructor=document.getElementById("instructor");
        const image=document.getElementById("image");

    }

    deleteCourse(element){
       
        if(element.classList.contains("delete")){
            element.parentElement.parentElement.remove();
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

    static deleteCourse(){

    }
}

document.addEventListener("DOMContentLoaded",Storage.displayCourses);

document.getElementById("new-course").addEventListener("submit",function(e){
    
    const title=document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value;

    const course = new Course(title,instructor,image);

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
    ui.deleteCourse(e.target);

    // delete from local storage
    Storage.deleteCourse();

    ui.showAlert("Kurs silindi","danger");
});

