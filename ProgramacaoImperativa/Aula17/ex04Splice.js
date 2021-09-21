// Aula 17  - 20/09/2021
// Métodos Avançados
// Splice = Emendar

/* Splice() é um método que serve para remover e adicionar elementos no array
sintaxe: array.splice(início, quantidade,item1, item2...)
quantidade é opcional - números inteiros a eliminar no array
*/

let frutas = ['Banana', 'Laranja', 'Limão', 'Maçã', 'Manga'];

let citricas = frutas.slice(1, 3); // laranja, limão
console.log(frutas);
frutas.splice(2,0,"Mamão","Kiwi");
console.log("Lista com adição...........: ",frutas);
