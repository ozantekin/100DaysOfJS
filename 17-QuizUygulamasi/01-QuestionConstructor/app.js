function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.userAnswer=answer;
}

// question prototype
Question.prototype.checkAnswer=function(answer){
    return this.userAnswer===answer;
}

var q1=new Question("what is the best programming?",["javascript","solidity","php","pyhton"],"javascript");

var q2= new Question("what is the most popular language?",["c#","visual basic","nodejs","javascript"],"javascript");

var q3=new Question("what is the best modern programming language?",["c#","javascript","pyhton","asp.net"]);

console.log(q1.checkAnswer("c#")); 
console.log(q1.checkAnswer("javascript"));  

console.log(q2.checkAnswer("visual basic"));
console.log(q2.checkAnswer("javascript"));
