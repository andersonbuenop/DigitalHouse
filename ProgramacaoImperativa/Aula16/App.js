let a = ['oi','anderson']
let b = ['tudo']
let c = ['bem?']
c = c.map(x => x.toUpperCase());
//console.log(c)
let frase = [...a,...b,...c];
console.log(frase)