var a = 1;
var b = "a";
var c = true;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, "a", true];
var h = ["a", 5, false];

var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;

(function (Payment) {
    Payment[Payment["krediPayment"] = 0] = "krediPayment";
    Payment[Payment["havalePayment"] = 1] = "havalePayment";
    Payment[Payment["kapidaOdeme"] = 3] = "kapidaOdeme";
    Payment[Payment["eftPayment"] = 2] = "eftPayment";
})(Payment || (Payment = {}));
;

var kredi = Payment.krediPayment; // 0
var haval = Payment.havalePayment; // 1
var eft = Payment.eftPayment; // 2
var kapidaOde = Payment.kapidaOdeme; // 3
