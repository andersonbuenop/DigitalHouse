//ex02

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