//file systemc
const fs = require('fs');
//ojt json
let Conta = '{"Numero da Conta":0, "Tipo da Conta":"corrente","saldo":0.0,"Titular da Conta":"Anderson Bueno"}';
// escrever txt
fs.writeFileSync('contaTeste.txt', Conta);

function ler(filename) {
    const wb = fs.readFileSync(filename,'utf-8');
    for (let i = 0, l = wb.length; i < l; i += 1) {
        console.log(this.processSheet(wb.Sheets[wb.SheetNames[i]]));
    }
}

ler('data.xlsx');