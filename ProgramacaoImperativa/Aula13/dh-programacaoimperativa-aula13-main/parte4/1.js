// 7 -Solicite que o usuário digite uma palavra de 6 caracteres.Se for digitada uma palavra inválida, peça novamente, até que ele digite uma palavra correta

function Verifica(palavra) {
  return palavra.length !== 6 ? "Palavra inválida" : "Palavra válida";
}

console.log(Verifica("123456"));
