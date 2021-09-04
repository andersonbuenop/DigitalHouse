-- Mesa 06
-- Anderson Bueno
-- Isnard Cavalcanti
-- Marco Thulio
-- Kantuta Molina

USE projeto_spotify;

-- 1 Importe a base de dados. Clique aqui para baixar.
-- ok
-- 2 Liste as músicas que possuem a letra "z" no título.

SELECT titulo
FROM cancao
WHERE titulo LIKE "s%";

-- 3 Liste as músicas que têm a letra "a" como segundo caractere e a letra "s" como último caractere.

SELECT titulo
FROM cancao
WHERE titulo LIKE "_a%s";

--  4 Mostre a lista de reprodução que contém mais músicas, renomeando as colunas, colocando em maiúscula a primeira letra, os acentos correspondentes e adicionando os espaços entre as palavras.

SELECT idplaylist as "Id Playlist"
, idusuario as "Id Usuário"
, titulo as "Título"
, qtdcancoes as "Quantidade de Canções"
, idestado as "Id Estado"
, datacriacao as "Data de Criação"
, dataexclusao as "Data de exclusão"
FROM playlist
order by qtdcancoes desc
limit 1;

-- 5 Em outro momento, obtenha uma lista com os 5 usuários mais jovens, a partir dos próximos 10 registros.
SELECT *
FROM usuario
ORDER BY Data_nac asc
LIMIT 5
OFFSET 10;

-- 6 Liste as 5 músicas com mais reproduções, em ordem decrescente.

SELECT titulo, qtdreproducao
FROM cancao
ORDER BY qtdreproducao desc
LIMIT 5;

-- 7 Gere um relatório de todos os álbuns em ordem alfabética.

SELECT titulo
FROM album
ORDER BY titulo ASC;

-- 8 Liste todos os álbuns que não possuem imagem, organizados em ordem alfabética.

SELECT titulo, imagemcapa
FROM album
WHERE imagemcapa IS NULL;

-- 9 Insira um novo usuário com os seguintes dados (leve em consideração os relacionamentos):
-- nomeusuario: novousuariodespotify@gmail.com
-- Nome e sobrenome: Elmer Santos 
-- password: S4321m
-- Data de nacimiento: 15/11/1991
-- Sexo: Masculino
-- Código Postal: B4129ATF
-- País: Brasil

INSERT INTO  usuario (idUsuario, nomeusuario, nomecompleto, Data_nac, sexo, cod, senha, pais_idpais)
VALUES (20, "novousuariodespotify@gmail.com", "Elmer Santos", "1991-11-15", "M", "B4129ATF", "S4321m", 6);

SELECT *
FROM usuario
WHERE idusuario = 20;

-- 10  Exclua todas as músicas do gênero "pop".

-- SET FOREIGN_KEY_CHECKS=0;
-- ALTER TABLE generoxcancao DROP CONSTRAINT cancao;
-- ALTER TABLE playlistxcancao DROP CONSTRAINT Idcancao;
-- ALTER TABLE generoxcancao ADD CONSTRAINT cancao FOREIGN KEY (Idcancao) REFERENCES cancao (Idcancao) ON DELETE CASCADE;
-- ALTER TABLE playlistxcancao ADD CONSTRAINT Idcancao FOREIGN KEY (Idcancao) REFERENCES cancao (Idcancao) ON DELETE CASCADE;
SET SQL_SAFE_UPDATES = 0;
DELETE FROM cancao, gc, p  USING cancao INNER JOIN generoxcancao gc INNER JOIN genero g INNER JOIN playlistxcancao p
WHERE g.genero LIKE "pop"
AND gc.idcancao = cancao.idcancao
AND g.idgenero = gc.idgenero;

SELECT c.idcancao,
c.titulo,
g.genero,
gc.idgenero
FROM cancao c
INNER JOIN generoxcancao gc ON gc.idcancao = c.idcancao
INNER JOIN genero g ON g.idgenero = gc.idgenero
INNER JOIN playlistxcancao p ON p.idcancao = gc.idcancao
WHERE g.genero LIKE "pop";




-- 11   Edite todos os artistas que não possuem uma imagem carregada e carregue para eles o texto "Imagem em falta" na coluna de imagens.

SELECT nome,
imagem as imagem_Antes,
COALESCE(imagem,"Imagem em falta") AS imagem_Depois
FROM artista
WHERE imagem IS NULL;