function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.userAnswer=answer;
}

// question prototype
Question.prototype.checkAnswer=function(answer){
    return this.userAnswer===answer;
}

// quiz constructor
function Quiz(questions){
    this.questions=questions;
    this.score=0;
    this.questionIndex=0; // ilk başta dizinin 1. elemanı olacak (q1) anlamına gelir
}

// quiz prototype
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex]; // sırayla soruların gelmesini sağlarız
}

//quiz isFinish
Quiz.prototype.isFinish=function(){
    return this.questions.length===this.questionIndex; // sonu soru geldiği anlamına gelir
}

// quiz guess
Quiz.prototype.guess=function(answer){ // answer parametresi soruye verilen cevap anlamına gelir
    var question=this.getQuestion(); 

    if(question.checkAnswer(answer)){
        this.score++; // user 1 tane doğru cevap vermiş anlamına gelir
    }
    this.questionIndex++; // bir sonraki soru gelmesi için yaparız
}

var q1=new Question("what is the best programming?",["javascript","solidity","php","pyhton"],"javascript");

var q2= new Question("what is the most popular language?",["c#","visual basic","nodejs","javascript"],"javascript");

var q3=new Question("what is the best modern programming language?",["c#","javascript","pyhton","asp.net"],"javascript");

var q4 = new Question("what's language ?",["C#","javascript","css","asp.net"],"javascript");

var questions=[q1,q2,q3,q4];

// start quiz
var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        // show score
        showScore();
    }else{

        var question=quiz.getQuestion();
        var choices=question.choices;
        //console.log(question.choices); gelip gelmeyeceğini kontrol etmek için bakılabilir

        document.querySelector("#question").textContent = question.text;

        for (var i=0; i<choices.length;i++){
            var element = document.querySelector("#choice"+i); // +i bize 0 1 2 3 değerlerini getirecek choice0 choice1 gibi
            element.innerHTML=choices[i];

            guess("btn"+i,choices[i]);
        }
        showProgress();
    }
}


function guess(id,guess){
    var btn =document.getElementById(id);
    btn.onclick=function(){
        quiz.guess(guess);
        loadQuestion()
    }
}

function showScore(){
    var html = `<h2>Score</h2><h4>${(quiz.score)*25}</h4>`; // 4 soru 100 puan

    document.querySelector(".card-body").innerHTML=html;
}

function showProgress(){
    var totalQuestion = quiz.questions.length;
    var questionNumber =quiz.questionIndex+1; // +1 verme nedenimiz 0.index 1.soruya tekabül etmektedir

    document.querySelector("#progress").innerHTML= "Question "+questionNumber + " of " + totalQuestion;
}

