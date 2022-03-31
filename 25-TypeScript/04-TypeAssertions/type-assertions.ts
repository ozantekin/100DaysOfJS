let message = "Hello World";
let count = message.length;
console.log(message);

let message1;
message1 = "Hello World";
let count1 = (<string>message1).length;
console.log(message1);

let message2;
message2 = "Hello World";
let count2 = (message2 as string).length;
console.log(message2);