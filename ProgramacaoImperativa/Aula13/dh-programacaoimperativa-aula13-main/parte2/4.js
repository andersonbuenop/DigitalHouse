// 4.  Solicite  que  o  usuário  digite  um  número.  Informe  então  se  este  número  é  par  ou ímpar.

function ImparPar(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

console.log(ImparPar(11));
