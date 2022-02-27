- Question parçaları
  - Text
    - ex: "what is the best programming language?"
  - choices
    - ex: ["JavaScript","Solidity","php","python"]
  - answer
    - ex: "JavaScript"
<br>
- var q1 = new Question("what is the best programming language?",["JavaScript","Solidity","php","pyhton"],"JavaScript");

<hr/>

- prototype
  - checkAnswer()
    - Constructor içine direkt bir değişken eklemek yerine prototype kısmına eklmeyi tercih ederiz. Yani kopya sadece orjinali içinde var oluyor.

- ex: q1.checkAnswer("c#") bu answer a uyuyorsa true çıktısını alırız. 
