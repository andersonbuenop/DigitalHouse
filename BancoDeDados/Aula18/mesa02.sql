-- Mesa 02
-- Anderson Bueno
-- Gladston de Paula
-- Joao Eduardo Eloe
-- Marco Thulio
-- Vinicius Alexandre
-- Weverton Gois

use emarket;
-- drop PROCEDURE sp_lista_produtos;
/*
1) Empregados

Crie uma SP que liste os sobrenomes e nomes dos empregados, ordenados alfabeticamente.
Invoque a SP para verificar o resultado.
*/
DELIMITER $$
CREATE PROCEDURE sp_nome()
BEGIN
select nome, sobrenome
from empregados
order by nome asc;
END $$

call sp_nome();

/*
2) Empregados por cidade

Crie uma SP que leva o nome de uma cidade e lista os funcionários dessa cidade
Invoque a SP para listar os empregados de Seattle.
*/
DELIMITER $$

CREATE PROCEDURE cidade_empregado (IN city VARCHAR (50), OUT func VARCHAR(50))
BEGIN 
	SELECT Nome
    FROM empregados 
    WHERE Cidade = city;
END $$

DELIMITER ;

CALL cidade_empregado('Seattle', @nome);
/*
3) Clientes por país

Crie uma SP que recebe o nome de um país e retorne o número de clientes naquele país.
Invoque a SP para consultar a quantidade de clientes de Portugal.
*/

delimiter $$

create procedure cliente_pais(in nome varchar(50), out numero INT)
begin
select count(*) into numero
from Clientes
where Pais = nome;
end $$

delimiter ;

call cliente_pais("Brazil", @numero);
SELECT @numero;

/*
4) Produtos sem estoque

Crie uma SP que receba um número e liste os produtos cujo estoque está abaixo desse número.O resultado
deve mostrar o nome do produto, o Estoque atual e o nome da categoria à qual o produto pertence.
Liste os produtos com menos de 10 unidades no estoque;
Liste os produtos sem estoque.
*/
delimiter $$
create procedure sp_lista_produtos(in num INT, out prod VARCHAR(50))
begin
select p.produtoNome, p.unidadesestoque, c.categorianome
from produtos p
left join categorias c on c.categoriaid = p.categoriaid
where unidadesestoque <= num;
end $$
delimiter ;

call sp_lista_produtos(10, @produto);
call sp_lista_produtos(0, @produto);

/*
5) Vendas com desconto

Crie uma SP que receba uma porcentagem e lista os nomes dos produtos que foram vendidos com 
desconto igual ou superior ao valor indicado, indicando, também,  o nome do cliente a quem foi vendido.
Liste as informações dos produtos que foram vendidos com um desconto superior a 10%.

*/
delimiter $$
create procedure sp_lista_produtos_desconto(in num INT, out prod VARCHAR(50))
begin
select p.produtoNome, p.precounitario, d.desconto, c.contato
from produtos p
left join detalhefatura d on d.produtoid = p.produtoid
left join faturas f on f.faturaid = d.faturaid
left join clientes c on c.clienteid = f.clienteid
where d.desconto >= num * (p.precounitario / 100);
end $$
delimiter ;

call sp_lista_produtos_desconto(5, @produto);