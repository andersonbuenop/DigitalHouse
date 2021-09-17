-- Mesa 04
-- Anderson Bueno
-- Lays Maiara
-- Tulio Marinho
-- João Eduardo Eloi
-- Weverton Gois

use emarket;

-- Relatórios II parte I - Revisando INNER JOIN

/*
Faça uma consulta sobre o faturamento do e-market. Inclua as seguintes informações:
ID da fatura
data da fatura
nome da empresa de correio (O id da empresa consta da tabela faturas no campo FormaEnvio)
nome do cliente
categoria do produto vendido
nome do produto(Você chega ao produto consultando os detalhes da fatura)
preço unitário
quantidade
*/


select f.faturaid, f.datafatura, c.empresa, cl.contato, ca.categorianome, p.produtonome, d.precounitario, d.quantidade
from faturas f
left join correios c on c.correioid = f.formaenvio
left join clientes cl on cl.clienteid = f	.clienteid
left join detalhefatura d on d.faturaid = f.faturaid
left join produtos p on p.produtoid = d.produtoid
left join categorias ca on ca.categoriaid = p.categoriaid;


-- Relatórios II parte II - INNER, LEFT e RIGHT JOIN

-- Liste todas as categorias junto com informações sobre seus produtos. Incluir todas as categorias, mesmo que não tenham produtos.
select c.categorianome, p.*
from categorias c
left join produtos p on c.categoriaid = p.categoriaid;

-- Liste as informações de contato de clientes que nunca compraram no emarket.
select *
from clientes c
left join faturas f on c.clienteid = f.clienteid
where f.clienteid is null;

-- Faça uma lista de produtos. Para cada um, indique seu nome, categoria e as informações de contato de
-- seu fornecedor. Lembre-se que podem existir produtos para os quais o fornecedor não foi indicado.
select p.produtonome, c.categorianome, pr.contato
from produtos p
left join categorias c on c.categoriaid = p.categoriaid
left join provedores pr on pr.provedorid = p.provedorid;

-- Para cada categoria, liste o preço unitário médio de seus produtos.
select c.categorianome, avg(p.precounitario) as "Preço Médio"
from categorias c
left join produtos p on p.categoriaid = c.categoriaid
GROUP BY p.precounitario;

-- Para cada cliente, indique a última nota fiscal de compra. Inclua clientes que nunca compraram no e-market.
select c.contato, max(f.datafatura)
from clientes c
left join faturas f on c.clienteid = f.clienteid
group by c.clienteid;

-- Todas as faturas têm uma empresa de correio associada (envio). Gere uma lista com todas as
-- empresas de correio e o número de faturas correspondentes. Execute a consulta usando RIGHT JOIN.
select c.empresa, count(f.faturaid) as "Qtd faturas"
from faturas f
right join correios c on c.correioid = f.formaenvio
group by c.correioid;