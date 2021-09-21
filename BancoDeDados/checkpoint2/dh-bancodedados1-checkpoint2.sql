/*
CheckPoint 02
Turme 17
Anderson Bueno
19/09/2021
*/
-- drop database livro;
CREATE DATABASE livro;
USE livro;

CREATE TABLE livro (
    id INT primary key auto_increment,
    nome VARCHAR(50),
    pagina INT,
    situacao TINYINT,
    dataInicial DATETIME,
    dataFinal DATETIME
);

CREATE TABLE classe (
    id INT primary key auto_increment,
    nome VARCHAR(50),
    tipo VARCHAR(50)
);

CREATE TABLE item (
    id INT primary key auto_increment,
    nome VARCHAR(50),
    descricao TEXT
);

CREATE TABLE personagem (
    id INT primary key auto_increment,
    nome VARCHAR(50),
    vida INT,
    sede INT,
    fome INT,
    idLivro INT,
    idClasse INT,
    nivel INT,
    idItem INT,
    CONSTRAINT idLivro FOREIGN KEY (idLivro)
        REFERENCES livro (id),
    CONSTRAINT idClasse FOREIGN KEY (idClasse)
        REFERENCES classe (id),
    CONSTRAINT idItem FOREIGN KEY (idItem)
        REFERENCES item (id)
);

CREATE TABLE usuario (
    id INT primary key auto_increment,
    fullName VARCHAR(50),
    pass VARCHAR(50),
    email VARCHAR(50),
    nickName VARCHAR(50),
    idPersonagem INT,
    CONSTRAINT idPersonagem FOREIGN KEY (idPersonagem)
        REFERENCES personagem (id)
);

INSERT INTO livro.livro
VALUES (default,'primeira historia',1,0,'2021-01-09','2021-12-09'),
(default,'primeira historia',1,0,'2021-09-01','2021-09-19'),
(default,'terceira historia',1,0,'2021-06-25','2021-09-25');

INSERT INTO livro.classe
VALUES (default, 'padeiro', '+1 em preparar comida'),
(default, 'professor', '+1 em ler'),
(default, 'ladrão', '+1 a noite');

INSERT INTO livro.item
VALUES (default, 'faca', 'Item de uso doméstico para passar manteiga no pão'),
(default, 'corda', 'Item usado por marinhairos para dar nós'),
(default, 'tocha', 'Item usado para iluminar e atacar inimigos com fogo');

INSERT INTO livro.personagem
VALUES (default,'joao',10,10,10,2,1,1,2),
(default,'pedrinho',9,10,5,3,2,2,1),
(default,'mariana',8,4,10,2,3,3,3);

INSERT INTO livro.usuario
VALUES (default,'joao silva',123456,'joao@gmail.com','jskiller',3),
(default,'pedro souza',654321,'ps@gmail.com','podrinho97',2),
(default,'mariana barbosa',789456,'mah_bar@gmail.com','mazinha',1);

update livro
set nome = 'segundo livro'
where id = 2;

delete from livro
where id = 1;

select * from livro;
select * from classe;
select * from item;
select * from personagem;
select * from usuario;