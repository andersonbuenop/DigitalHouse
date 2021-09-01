-- MESA 03

-- Anderson Bueno
-- Luana Borges
-- Lays Maiara
-- Luiz Henrique
-- Weverton Gois

use emarket;

-- Categorias e produtos
-- 1 ) 
SELECT * from categorias;

-- 2 )
SELECT CategoriaNome, Descricao FROM categorias;

-- 3 )
SELECT ProdutoNome FROM produtos;

-- 4 )
SELECT ProdutoNome
FROM produtos
WHERE Descontinuado = 1;

-- 5 )
SELECT ProdutoNome
FROM produtos
WHERE ProvedorID = 8;

-- 6 )
SELECT ProdutoNome
FROM produtos
WHERE PrecoUnitario BETWEEN 10 and 22;

-- 7 )
SELECT ProdutoNome
FROM produtos
WHERE UnidadesEstoque < NivelReabastecimento;

-- 8 )
SELECT ProdutoNome
FROM produtos
WHERE UnidadesEstoque < NivelReabastecimento
and UnidadesPedidas = 0;

-- Clientes
-- 1 ) 
SELECT Contato, Empresa, Titulo, Pais
FROM clientes
ORDER BY Pais asc;

-- 2 )
SELECT Contato
FROM clientes
WHERE Titulo like "Owner";

-- 3 )
SELECT Contato
FROM clientes
WHERE Contato like "c%";

-- Faturas
-- 1 )
SELECT *
FROM Faturas
ORDER BY DataFatura asc;

-- 2 )
SELECT *
FROM Faturas
WHERE PaisEnvio like "USA"
AND FormaEnvio <> 3;

-- 3 )
SELECT *
FROM Faturas
WHERE ClienteID like "GOURL";

-- 4 )
SELECT *
FROM Faturas
WHERE EmpregadoID IN (2,3,5,8,9);

-- Queries I - Parte II

-- Nesta segunda parte, vamos intensificar a prática de consultas SELECT,
-- adicionando ALIAS, LIMIT e OFFSET.

-- Produtos
-- 1 )
SELECT ProdutoNome, PrecoUnitario
FROM produtos
ORDER BY PrecoUnitario desc;

-- 2 )
SELECT ProdutoNome, PrecoUnitario
FROM produtos
ORDER BY PrecoUnitario desc
LIMIT 5;

-- 3 )
SELECT ProdutoNome, UnidadesEstoque
FROM produtos
ORDER BY UnidadesEstoque desc
LIMIT 10;

-- DetalheFatura
-- 1 )
SELECT df.FaturaId, p.ProdutoNome, Quantidade
FROM detalhefatura df
INNER JOIN produtos p ON p.ProdutoID=df.ProdutoID;

-- 2 )
SELECT df.FaturaId, p.ProdutoNome, Quantidade
FROM detalhefatura df
INNER JOIN produtos p ON p.ProdutoID=df.ProdutoID
ORDER BY Quantidade desc;

-- 3 )
SELECT df.FaturaId, p.ProdutoNome, df.Quantidade
FROM detalhefatura df
INNER JOIN produtos p ON p.ProdutoID=df.ProdutoID
WHERE df.Quantidade BETWEEN 50 and 100
ORDER BY Quantidade desc;

-- 4 )
SELECT df.FaturaId as "Numero da Fatura", p.ProdutoNome as "Produto", df.PrecoUnitario * df.Quantidade as "Total"
FROM detalhefatura df
INNER JOIN produtos p ON p.ProdutoID=df.ProdutoID
ORDER BY Quantidade desc;

-- Extras
-- Sobrou tempo? Você quer continuar praticando?
-- Deixamos alguns exercícios extras da mesma base:

-- 1 )
SELECT *
FROM clientes
WHERE pais like "brazil"
OR pais like "mexico"
OR Titulo like "sales%";

-- 2 )
SELECT *
FROM clientes
WHERE Empresa like "a%";

-- 3 )
SELECT Cidade, Contato as "Nome e Sobrenome", titulo as "Cargo" 
FROM clientes
WHERE Cidade like "madrid";

-- 4 )
Select *
FROM faturas
WHERE FaturaId BETWEEN 10000 AND 10500;

-- 5 )
Select *
FROM faturas
WHERE FaturaId BETWEEN 10000 AND 10500
OR 	ClienteID LIKE "b%";

-- 6 )
Select *
FROM faturas
WHERE CidadeEnvio like "Vancouver"
OR FormaEnvio = 3;

-- 7 )
Select *
FROM empregados
WHERE Sobrenome like "Buchanan";

-- 8 )
Select *
FROM faturas
WHERE EmpregadoID = 5;