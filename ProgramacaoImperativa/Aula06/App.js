//Atiidade de Mesa Aula 06
/*
Integrantes:
- Pedro Henrique Cardoso
- Paulo Rossi
- Wagner Sena
- Anderson Bueno
- Dayana Miranda
- Anna Karla
*/

//* Módulo 1
//Função de Somar
function somar(a, b){
    return a+b;
 }; 
 //Função de Subtrair
 function subtrair(a, b){
     return a-b;
 };
 //Função de Multiplicar
 function multiplicar(a, b){
     return a*b;
 };
 //Função de Dividir
 function dividir(a, b){
     return a/b;
 };
 
 //* Módulo 3
 //Quadrado de um número
 function quadradoDoNumero(a){
     return multiplicar(a, a);
 };
 //Média de 3 números
 function mediaDeTresNumeros(a, b, c){
     return dividir(somar(somar(a, b),c),3);
 };
 //Porcentagem
 function calculaPorcentagem(total, porcentagem){
     return multiplicar(total,dividir(porcentagem,100));
 };
 //Gerador de porcentagem
 function geradorDePorcentagem(a, b){
     return multiplicar(dividir(a,b),100);
 };
 
 
 //* Módulo 2
 //Interpolação
 console.log ("-------------- Teste de Operações / Calculadora --------------")
 console.log(`Somar(50,25) = ${somar(50, 25)}`);
 console.log(`Subtração(50,25) = ${subtrair(50, 25)}`);
 console.log(`Multiplicação(50,25) = ${multiplicar(50, 25)}`);
 console.log(`Divisão(50,25) = ${dividir(50, 25)}`);
 console.log ("-------------- Teste de Operações Módulo 3 --------------")
 console.log(`Exponenciação(14 ao quadrado) = ${quadradoDoNumero(14)}`);
 console.log(`Média de 3 números(4,6,5) = ${mediaDeTresNumeros(4, 6, 5)}`);
 console.log(`Porcentagem (25% de 400) = ${calculaPorcentagem(400, 25)}`);
 console.log(`Gerador de Porcentagem (4 em relação a 400) = ${geradorDePorcentagem(4, 400)}%`);