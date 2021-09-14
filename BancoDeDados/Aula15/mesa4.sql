-- Mesa 04
-- Anderson Bueno
-- Luana Borges
-- João Rocha

use emarket;
-- 1. Para cada empresa de correio, calcule o transporte total. Inclua todas as empresas de correio, mesmo que
-- não tenham realizado nenhuma operação.

select empresa, sum(transporte) as "Transporte Total"
from correios correios
inner join faturas faturas on faturas.formaenvio = correios.correioid
group by empresa;

-- 2. Liste as informações de contato (ou, endereço, etc.) dos clientes que não fizeram compras. Exiba as
-- informações no formato considerado mais adequado. Por exemplo: <endereço> (CP: < CEP>)

select contato, endereco, cidade, codigopostal, pais
from clientes clientes
left join faturas faturas on faturas.clienteid = clientes.clienteid
where faturas.clienteid is null;

-- 3. Liste as categorias e seus produtos, incluindo as categorias para as quais não há produtos no banco de dados.
-- Para nomes de produtos, onde mix ou Chef diz, substituí-lo por MIX ou CHEF, respectivamente. 
-- Por exemplo: Em vez de Filo Mix, coloque Mix Edge.

select c.categorianome, upper(replace(replace(p.produtonome,"Mix","Filo Mix"),"Chef","Mix Edge")) as "Nome do Produto"
from categorias c
inner join produtos p on p.categoriaid = c.categoriaid
where p.produtonome like "%mix%"



