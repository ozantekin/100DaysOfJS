<h1 align="center"> Notlar </h1>

- Aşağıdaki message string olur;
``` TypeScript 
let message = "Hello World";
```
- Yukarıdaki örnekte aşağıdaki ifade çalışır:
``` TypeScript 
let count = message = message.length;
```
- Ama şimdi yapacağımız işlem ile message any olur:
``` TypeScript
let message;
message= "Hello World";
```
- Hatırlatma: Any değer içine string, number ya da farklı bir değer atabiliriz bunda bir problem yoktur.
- Yukarıdaki örnekte aşağıdaki ifade artık çalışmaz:
``` TypeScript 
let count = message = message.length;
```
- Bu problemin önüne geçmek için string bir türe eşit olduğunu söyleyebiliriz.
``` TypeScript
let message;
message = "Hello World";
let count = (<string>message).length;
```