
//file system
const fs = require('fs');
//ojt json
let frutas = '{"Fruta":"Banana"}';
// escrever txt
fs.writeFileSync('teste.txt',frutas);
//ler arquivo txt
let arquivoJson = fs.readFileSync('teste.txt','utf-8');
console.log(arquivoJson); //imprimir o conteudo do txt
// converter objJSON para objJS
let converterJsonParaJs = JSON.parse(arquivoJson);
console.log(converterJsonParaJs);
