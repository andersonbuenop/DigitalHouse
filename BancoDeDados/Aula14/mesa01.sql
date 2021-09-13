-- Mesa 01
-- Anderson Bueno
-- Weverton Gois
-- Marcelo Cabral
-- Pedro Soares
-- Wagner Sena

use musimundos;

-- 1 - Selecione o nome dos artistas(tabela artistas) com o nome de seus albuns (tabela albuns) ordenado por id do artista.

select ar.nome, al.titulo
from artistas ar
inner join albuns al on al.id=ar.id
order by ar.id asc;

-- 2 - Selecione o nome do cliente (clientes) e suas faturas (faturas), porém somente as faturas com valor maior de 5 ordenados pelo valor da fatura decrescente.

select c.nome, f.valor_total
from clientes c
inner join faturas f on f.id=c.id
where f.valor_total > 5
order by f.valor_total desc;

-- 3 Selecione o nome das cancoes (tabela cancoes) e o tipo de arquivo (tabela tipos_de_arquivos) e exiba o nome da canção e o tipo ordenado pelo id da canção.

select c.nome, t.nome
from cancoes c
inner join tipos_de_arquivo t on t.id=c.id
order by c.id asc;