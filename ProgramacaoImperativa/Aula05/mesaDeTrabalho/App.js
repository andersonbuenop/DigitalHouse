// ex01
function convertInchToCentimeter(i){ return i * 2.54; }
console.log(convertInchToCentimeter(2))
// ex02
function convertToUrl(u){ return ("https://www."+u+".com.br");}
console.log(convertToUrl("sitexyz"))
// ex03
function phrase(f){ return (f+"!");}
console.log(phrase("Olá mundo"));
// ex04
function dogAge(a){ return a * 7;}
console.log(dogAge(5))
// ex05
function calcMoney(x){ return x / 160;}
console.log(calcMoney(1000))
// ex06
function imc(height, weight){ return weight /  height;}
console.log(imc(165,80))
// ex07
function convertToUp(s){ return s.toUpperCase();}
console.log(convertToUp("teste"));
// ex08
function param(p){ return (typeof p);}
console.log(param("teste"));
// ex09
function calcPI(p) { return 2 * Math.PI * p;}  
  console.log(calcPI(10));