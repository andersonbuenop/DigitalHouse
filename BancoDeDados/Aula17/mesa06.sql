-- mesa 06
-- Anderson Bueno
-- Gustavo Souza
-- Lays Maiara
-- Israel Almeida

create view view_Cliente as
    select 
        ClienteID, Fax, Telefone
    from
        Clientes;

select 
    *
from
    Clientes;

/* 2. Liste os números de telefone dos clientes que não possuem fax. Faça isso de duas maneiras diferentes:
a. Consultando a tabela clientes /

select Clientes.telefone, Clientes.ClienteID from Clientes
WHERE Clientes.Fax = " ";

/ 2. Liste os números de telefone dos clientes que não possuem fax. Faça isso de duas maneiras diferentes:
-- b. Consultando a view do cliente /

select telefone, ClienteID from view_Cliente
WHERE Fax = " ";

 / Fornecedores

1. Crie uma view com os seguintes dados do fornecedor: Id, contato,
empresa e endereço. Para o endereço, pegue o endereço, cidade, código
postal e país. */


create view view_Fornecedor as
select ProvedorID as "FornecedorID", Contato, Empresa, concat(Endereco, ",", Cidade, ",", CodigoPostal, ",", Pais) as "Endereco" from Provedores;

select * from view_Fornecedor;

/* 2. Liste os fornecedores que moram na Avenida das Americanas, no Brasil. Faça de duas formas diferentes:
a. Consultando a tabela de fornecedores/

 SELECT ProvedorID, Empresa, Endereco, Pais from Provedores
 where Endereco like "%Americanas%";

/ b. Consultando a view do fornecedor
 */
 
 SELECT 
    FornecedorID, Empresa, Endereco
from
    view_fornecedor
where
    Endereco like '%Americanas%';
 
/*
1. Crie uma view dos produtos que será usada ​​para controle de estoque. Inclua o id e nome do produto, preço unitário
arredondado sem decimais, unidades em estoque e as unidades encomendadas. Inclua também uma nova coluna PRIORIDADE, 
com os seguintes valores:
BAIXA se as unidades encomendadas forem zero
MÉDIA se as unidades pedidas forem menores do que as unidades em estoque
URGENTE se as unidades pedidas não dobrarem o número de unidades em estoque
PRIORITÁRIO caso contrário
*/
create view view_controle_estoque as
select produtoid, 
produtonome, 
format(precounitario, 2) as precounitario,  
unidadesestoque, 
unidadespedidas,
case
	when UnidadesPedidas = 0  then 'BAIXA'
    when UnidadesPedidas < UnidadesEstoque then 'MÉDIA'
    when (UnidadesPedidas+UnidadesEstoque) < (UnidadesEstoque*2) then 'URGENTE'
    else 'PRIORIDADE'
end AS PRIORIDADE
from produtos;

/*
2.  É necessário um relatório para identificar problemas de estoque. Utilizando a view
criada no exercício anterior, indique, para cada prioridade, quantos produtos existem e 
seu preço médio. Não inclua prioridades para as que possuem menos de 5 produtos.
*/

select prioridade, sum(unidadesestoque) as unidadesestoque, format(avg(precounitario),2) as precounitario
from view_controle_estoque
where unidadesestoque > 5
group by prioridade;



