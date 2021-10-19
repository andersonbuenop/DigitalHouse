/*
GRUPO 01
Anderson Bueno
Weverton Gois
Marco Thulio
Daniel Alves
*/
/*
 1.Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens. Dentro da variável,listeprodutos disponíveis, informando os seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do Produtoe Status.
A informação Qualidade do Produtodeve ser um número que irá de 0 a 10.A informação Statusdeve ser um Booleano, indicando se o produto está disponível em estoque.
*/

let produtos = [{ nome: 'fusca', valor: 1000, qualidade: 100, status: true }, { nome: 'fox', valor: 350, qualidade: 50, status: true },{ nome: 'ferrari', valor: 1600, qualidade: 61, status: true }]

/*
2.Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. Selecionetodos os produtos que tenham: Valorentre 482 e 1600;Qualidadesuperior a 60;Statuscomo disponível.O resultado do filtro deve ser armazenado na variável carrinho.

*/
let carrinho = produtos.filter(item => 
    (item.valor >= 482 && item.valor <= 1600) &&
    (item.qualidade > 60) && // Usamos 60 como pede na questão
    (item.status === true)
);
/*
3.Por fim, é necessário exibirtodos os itens presentes no carrinho, com seus nomes e preços correspondentes, e no final um valor total, resultante da somatória de todos os produtos.
*/
console.log('Produtos - Valor unitario')
let conta = carrinho.forEach(item =>
    console.log(`${item.nome} - R$ ${item.valor.toFixed(2)} `)
);

let soma = carrinho.reduce((previousValue, currentValue) => previousValue.valor + currentValue.valor)

console.log(`Valor Total: R$ ${soma.toFixed(2)}`)