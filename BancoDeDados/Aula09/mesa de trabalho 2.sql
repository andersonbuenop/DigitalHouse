-- 	Mesa 02
-- Anderson Bueno
-- Loyane Jacinto
-- Luiz Henrique
-- Marcelo Cabral
-- Ricardo Ramalho
-- Wagner Sena

CREATE DATABASE spotify;

USE  spotify;

CREATE TABLE usuario(
	id  INT PRIMARY KEY AUTO_INCREMENT,
    nomeusuario VARCHAR(45),
    data_nac DATE,
    sexo VARCHAR(1),
    email VARCHAR(150),
    senha VARCHAR(45)
);

CREATE TABLE artista(
	id  INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    sobrenome VARCHAR (100)
);

CREATE TABLE genero(
	id  INT PRIMARY KEY AUTO_INCREMENT,
    genero VARCHAR(45)
);

CREATE TABLE playlist(
	id  INT PRIMARY KEY AUTO_INCREMENT,
    idusuario INT,
    titulo VARCHAR(45),
    qtdcancoes INT(11),
    datacriacao DATETIME,
    FOREIGN KEY (idusuario) REFERENCES usuario(id)
);

-- DROP TABLE playlist;

CREATE TABLE album(
	id  INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45),
    idartista INT,
    FOREIGN KEY (idartista) REFERENCES artista(id)
);

CREATE TABLE cancoes(
	id  INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45),
    duracao DOUBLE,
    qtdreproducao INT,
    qtdlikes INT,
    idalbum INT,
    FOREIGN KEY (idalbum) REFERENCES album(id)
);

CREATE TABLE generocancao(
	id  INT PRIMARY KEY AUTO_INCREMENT,
    idgenero INT,
    idcancao INT,
    FOREIGN KEY (idgenero) REFERENCES genero(id),
    FOREIGN KEY (idcancao) REFERENCES cancoes(id)
);

CREATE TABLE playlistcancao(
	id  INT PRIMARY KEY AUTO_INCREMENT,
    idcancao INT,
    idplaylist INT,
    FOREIGN KEY (idcancao) REFERENCES cancoes(id),
    FOREIGN KEY (idplaylist) REFERENCES playlist(id)
);

INSERT INTO usuario	 (nomeusuario, data_nac, sexo, email, senha)
VALUES 
("Wagner","1979-12-15","M","wagner@email.com.br","123456"),
("Machado","2000-05-23","M","assis@emaildele.com.br","654321"), 
("Ana","1995-08-30","F","ana@emaildela.com.br","123789");

INSERT INTO artista (nome, sobrenome)
VALUES 
("Pollo","Marco"),
("Xitao","e Xororo"),
("Luan","Santanna");

INSERT INTO album (titulo, idartista)
VALUES 
("Vagalume","1"),
("Evidencia","2"),
("Meteoro","3");

INSERT INTO cancoes (titulo, duracao, qtdreproducao, qtdlikes, idalbum)
VALUES 
("Vagalume","2.5","25","24","7"),
("Evidencia","1.9","250","150","8"),
("Meteoro","3.6","999","500","9");

select * from album;
select * from artista;
select * from cancoes;

