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

var q3=new Question("what is the best modern programming language?",["c#","javascript","pyhton","asp.net"]);

var questions=[q1,q2,q2];

// start quiz
var quiz = new Quiz(questions);

console.log(quiz.isFinish()); // quiz bitti mi? false çünkü yeni başladık index =0


//q1
console.log(quiz.getQuestion());
quiz.guess("javascript");

//q2
console.log(quiz.getQuestion());
quiz.guess("pyhton");

//q3
console.log(quiz.getQuestion());
quiz.guess("javascript");


console.log(quiz.score); // 2puan aldık

console.log(quiz.isFinish()); // quiz bitti true alırız




