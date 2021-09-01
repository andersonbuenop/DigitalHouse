/* Mesa 07
Anderson Bueno/* Mesa 07
Anderson Bueno
Ricardo Ramalho
Poliana Gomes
Daniel  Alves
Joao Rocha
 */
const PrecoSemTaxa = [1200, 340, 560, 30400, 500, 7060, 400, 1000]; //array com valores de preço sem taxa
const taxa= 1.21;  // taxa definada
let precoComTaxa = []; // array vazio
 
function guardarPrecoComTaxa(PrecoSemTaxa) { // função para multiplicar cada elemento do array e criar novo array com valores ja taxados
  for (let i = 0; i < PrecoSemTaxa.length; i++) { // i = indice do array com valor 0, preçoSemTaxa.length (o tamanho do array), i++ incrementa o indice +1 cada vez que passa pelo laço
    precoComTaxa.push(PrecoSemTaxa[i] * taxa); // push (adciona valor ao novo array precoComTaxa) 
  }
}
 
function mostrarPrecoComTaxa(array) { //Funcção mostrarPrecoComTaxa chama a função guardarPrecoComTaxa
  for (let i = 0; i < array.length; i++) { // for passando pelos elementos do array
    console.log(array[i]); // imprime os elemento do array, onde array = precoComTaxa[i]
  }
}
 
guardarPrecoComTaxa(PrecoSemTaxa); //  função que recebe um array e retorna os elementos multiplicados pelo conteudo da variavel taxa
mostrarPrecoComTaxa(precoComTaxa); // função que recebe um array e retorna console.log passando por cada elemento do array