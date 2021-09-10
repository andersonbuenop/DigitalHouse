-- Mesa 01
-- Anderson Bueno
-- Paulo Rossi
-- Wagner Sena
-- Tulio Marinho
-- Marco Thulio

-- 1 - O valor da fatura mais alta cujo a cidade de cobrança é “Oslo”. (MAX)
SELECT max(valor_total) from faturas
where cidade_cobranca like "oslo";

-- 2 - O valor da fatura mais baixa de todas. (MIN)
SELECT min(valor_total) from faturas;

-- 3 - O valor médio das faturas que o país de cobrança é “Canada”. (AVG)
SELECT avg(valor_total) from faturas
where pais_cobranca like "canada";

-- 4 - A quantidade de faturas que o país de cobrança é “Canada”. (COUNT)
SELECT count(valor_total) from faturas
where pais_cobranca like "canada";

-- 5 - O valor total somado de todas as faturas. (SUM)
SELECT sum(valor_total) from faturas;

-- 6 - Selecione o id, a data e valor das faturas com valor abaixo da média.
select id, data_fatura, valor_total from faturas
where valor_total < (select avg(valor_total) from faturas)
order by valor_total desc;

-- 7 - A data de nascimento do funcionário mais jovem da empresa (MAX)
select nome, sobrenome, max(data_nascimento) from empregados;

-- 8 - A data de nascimento do funcionário mais velho da empresa (MIN)
select nome, sobrenome, min(data_nascimento) from empregados;

-- 9 - Formate a data do nascimento dos funcionários no formato ex: "02 May 2020". 
select nome, sobrenome, date_format(data_nascimento, "%d %M %Y") from empregados;

-- 10 - O numero de cancoes que tem como compositor “AC/DC”. (COUNT)
select count(nome) from cancoes
where compositor like "AC/DC";

-- 11 - A duração média das músicas em milisegundos (AVG)
SELECT avg(duracao_milisegundos) from cancoes;

-- 12 - O tamanho médio em bytes das músicas que como compositor “AC/DC”. (AVG)
select avg(bytes) from cancoes
where compositor like "AC/DC";

-- 13 - Quantidade de clientes que moram na cidade de “São Paulo”. (COUNT)
select count(nome) from clientes
where cidade like "São Paulo";

-- 14 - Quantidade de clientes que moram na cidade “Paris”. (COUNT)
select count(nome) from clientes
where cidade like "paris";

-- 15 - Quantidade de clientes que tenham email do “yahoo”. (COUNT e LIKE)
select count(nome) from clientes
where email like "%yahoo%";