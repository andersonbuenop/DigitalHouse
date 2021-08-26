//ex01
console.log("//ex01")
console.log("1 = " + (!true));
console.log("2 = " + (!false));
console.log("3 = " + (!!false));
console.log("4 = " + (!!true));
console.log("5 = " + (!1));
console.log("6 = " + (!!1));
console.log("7 = " + (!0));
console.log("8 = " + (!!0));
console.log("9 = " + (!!""));

let q = 5;
let w = 9;
console.log("10a = " + (q < 10 && q !== 5));
console.log("10b = " + (q > 9 || q === 5));
console.log("10c = " + (!(q === w)));

//ex02
console.log("//ex02")

let x = 10
let y = "a"
console.log("1 = " + (y === "b" || x >= 10));

let a = 3
let b = 8
console.log("2 = " + (!(a == "3" || b === y) && !(b !== 8 && a <= y)));


let str = ""
let msg = "haha!"
let eBonito = "false"
console.log("3 = " + (!((str || msg) && eBonito)));

