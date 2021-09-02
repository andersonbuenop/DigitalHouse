// Escreva um programa que ajuda os alunos a calcularem as notas desta disciplina. Oprograma deve perguntar as notas da primeira e da segunda prova, calcular a média aritmética entre elas, e exibir na tela

function Media(nota1, nota2) {
  const media = (nota1 + nota2) / 2;
  return media;
}

console.log(Media(5, 6));
