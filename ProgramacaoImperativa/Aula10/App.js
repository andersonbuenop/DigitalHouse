/*
mesa 02

Anderson Bueno
Lélia Salles
Luiz Henrique
Marco Thulio
Marcos Rezende
Tulio marinho

O que esses códigos retornam?

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

resposta : undefined, porque numbers.length retorne 5, e number[5], não existe.

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])
 
resposta: "Spiderman"

let str = “una string qualquer”
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])

 Resposta: "una string qualquer"
*/

/*
 Array Invertido

Neste exercício, você terá que criar uma função que retorne um array com seus elementos 
invertidos, sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta
 a ordem de seus elementos.
 
 1 - Crie a função imprimirInverso que pega um Array como um argumento e imprime
  cada elemento em ordem reversa no console (você não precisa inverter o Array).
  */
let grupoDeAmigos = ["Harry", "Ron", "Hermione", "Spiderman", "Hulk", "Ironman", "Penélope Glamour", "Pierre Nodoyuna", "Patán"]
console.log(grupoDeAmigos) // normal
console.log(grupoDeAmigos.reverse()) //reverso

/* 
2 - Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.
*/
let grupoDeAmigos2 = ["Harry", "Ron", "Hermione", "Spiderman", "Hulk", "Ironman", "Penélope Glamour", "Pierre Nodoyuna", "Patán"]

function inverter(array) {

    array.forEach(element => { var novo = [] });
    return array
}
console.log(inverter(grupoDeAmigos2));
/* 
Neste exercício, você criará uma função somarArray() que aceita um array de números
e retorna a soma de todos eles.
Exemplo:
somarArray([1,2,3])                // 6
somarArray([10, 3, 10, 4])     // 27
somarArray([-5,100])             // 95 
*/
function somarArray(arrsoma) {
    var total = 0;
    for (let index = 0; index < arrsoma.length; index++) {
        total = total + arrsoma[index];
    }
    return total;
}
var arr1 = [1, 2, 3]
var arr2 = [10, 3, 10, 4]
var arr3 = [-5, 100]
console.log(somarArray(arr1)) // 6
console.log(somarArray(arr2)) // 27
console.log(somarArray(arr3)) // 95
/* 
Simulação Array.join()
Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
Importante: Não poderá utilizar o método Array.join() original.
Por exemplo:
join(["o","l","á"]) deve retornar a string "olá".
join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".
*/
function join(arrjoin){  
    var element = "";
    for (let index = 0; index < arrjoin.length; index++) {
        element = element + arrjoin[index];        
    };
    return element;
}
var arr4 = ["o","l","á"];
var arr5 = ["t","c","h","a","u"];
console.log(join(arr4));
console.log(join(arr5));
/* 
Coleções de Filmes (e mais…)
O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
	"star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 
Importante: verifique se tudo funciona corretamente acessando qualquer um dos filmes uma vez que a 
estrutura correspondente tenha sido criada.
*/
var filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];
console.log(filmes);
/* Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe
 um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
Dica: revise o que faz o método de strings .toUpperCase(). */
function toUpper(arrToUpper){
    var toUppered  = [];
     for (let index = 0; index < arrToUpper.length; index++) {
        toUppered.push(arrToUpper[index].toUpperCase());      
    };
    return toUppered;
};
var upperFilmes = toUpper(filmes);
console.log(upperFilmes);
/*
Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
	"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os 
elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array 
com todos os filmes como seus elementos.
*/
var filmes2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
console.log(filmes2);
function concat(arr1, arr2) {
    for (let index = 0; index < arr2.length; index++) {
      arr1.push(arr2[index]);
    };
    return arr1;
  };
  console.log(concat(filmes, filmes2));
/* 
Durante o processo, percebemos que o último elemento na série de filmes 
animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo
para que possamos remover o último elemento antes de migrar o conteúdo para o array
que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável.
*/
var filmes3 = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];
  var filmes4 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
  function concat(arr1, arr2) {
    var game = arr2[arr2.length-1];
    console.log("Game: " + game);
    console.log("Antes de remover o game: " + arr2);
    arr2.pop();
    console.log("Depois de remover o game: " + arr2);
    for (let index = 0; index < arr2.length; index++) {
      arr1.push(arr2[index]);
    };
    return arr1;
  };
  console.log("Nova lista de filmes: "+concat(filmes3, filmes4));
/* 
Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do
mundo nos filmes com o seguinte formato:
	const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
	const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções,
a fim de verificar seu correto funcionamento.
 */  
var asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
console.log(asiaScores);
var euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
console.log(euroScores);
for (let index = 0; index < asiaScores.length; index++) {
  for (let index = 0; index < euroScores.length; index++) {
    if ((asiaScores[index]) === (euroScores[index])) {
      console.log("Compare Arrays => asiaScores: " + asiaScores[index] + " com euroScores: " + euroScores[index] + ", resultado : " + true);
    } else {
      console.log("Compare Arrays => asiaScores: " + asiaScores[index] + " com euroScores: " + euroScores[index] + ", resultado : " + false);
    }
  } break;

}
/* Se chegarmos a este ponto e tudo estiver bem, o tech leader da equipe deve estar
extremamente feliz com nosso trabalho e desempenho.
Bom trabalho! */

