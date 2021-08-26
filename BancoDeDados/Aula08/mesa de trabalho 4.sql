CREATE DATABASE universo_leitura;
USE universo_leitura;

CREATE TABLE associados(
	id INT PRIMARY KEY AUTO_INCREMENT,
    rg VARCHAR(20),
    nome VARCHAR(50),
    sobrenome VARCHAR(50),
    endereco VARCHAR(100),
    cidade VARCHAR(50),
    estado VARCHAR (2)    
);

CREATE TABLE telefones(	
	id INT PRIMARY KEY AUTO_INCREMENT,
    telefone_socio VARCHAR(100),
    cod_associado INT,
    FOREIGN KEY (cod_associado) REFERENCES associados(id)
);

CREATE TABLE editoras(
	id INT PRIMARY KEY AUTO_INCREMENT,
    razao_social VARCHAR(150),
    telefone VARCHAR(100)
);

CREATE TABLE autores(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    sobrenome VARCHAR(100)
);

CREATE TABLE livros(
	id INT PRIMARY KEY AUTO_INCREMENT,
    cod_isbn VARCHAR(13),
    titulo VARCHAR(200),
    ano_criacao DATE,
    ano_publicacao DATE,
    cod_autor INT,
    cod_editora INT,
    FOREIGN KEY (cod_autor) REFERENCES autores(id),
    FOREIGN KEY (cod_editora) REFERENCES editoras(id)
);

CREATE TABLE exemplares(
	id INT PRIMARY KEY AUTO_INCREMENT,
    sinistro BOOL,
    cod_livro INT,
    FOREIGN KEY (cod_livro) REFERENCES livros(id)
);

CREATE TABLE emprestimos(
	id INT PRIMARY KEY AUTO_INCREMENT,
	dia DATE,
    prazo_devolucao DATE,
    dia_devolucao DATE,
    cod_associado INT,
    FOREIGN KEY (cod_associado) REFERENCES associados(id)
);

CREATE TABLE emprestimo_exemplares(
	id INT PRIMARY KEY AUTO_INCREMENT,
    cod_emprestimo INT,
    cod_exemplar INT,
    FOREIGN KEY (cod_emprestimo) REFERENCES emprestimos(id),
    FOREIGN KEY (cod_exemplar) REFERENCES exemplares(id)
);