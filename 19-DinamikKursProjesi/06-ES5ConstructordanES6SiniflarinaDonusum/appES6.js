class Course {
    constructor(title,instructor,image){
        this.title=title;
        this.instructor=instructor;
        this.image=image;
    }
}

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

document.getElementById("new-course").addEventListener("submit",function(e){
    
    const title=document.getElementById("title").value="";
    const instructor = document.getElementById("instructor").value="";
    const image = document.getElementById("image").value="";

    const course = new Course(title,instructor,image);

    const ui = new UI();

    if(title==="" || instructor==="" || image===""){
        
        ui.showAlert("Lütfen formu eksiksiz bi şekilde tamamlayın","warning")
        // 1.kısım => showAlert içindeki message parametresi
        // 2.kısım => showAlert içindeki className parametresi (warning) (alert-warning) 
        
    }else{

        ui.addCourseToList(course);

        ui.clearControls();

        ui.showAlert("Kurs eklendi","success");

    }
    
    e.preventDefault();
});

document.getElementById("course-list").addEventListener("click",function(e){
    
    const ui= new UI();

    ui.deleteCourse(e.target);

    ui.showAlert("Kurs silindi","danger");
});

