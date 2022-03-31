let a: number = 1;
let b:string = "a";
let c: boolean = true;
let d: any;
let e: number[] = [1,2,3];
let f: Array<number> = [1,2,3]; 
let g: any[] = [1, "a", true]; 
let h: [string, number, boolean] = ["a", 5, false];

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment{krediPayment=0, havalePayment=1, kapidaOdeme=3, eftPayment=2};

let kredi = Payment.krediPayment; // 0
let haval = Payment.havalePayment; // 1
let eft = Payment.eftPayment; // 2
let kapidaOde = Payment.kapidaOdeme; // 3