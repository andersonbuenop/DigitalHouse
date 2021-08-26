CREATE DATABASE consultorio;
USE consultorio;

CREATE TABLE pacientes(
	id  INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    sobrenome VARCHAR(100)
);

CREATE TABLE medicos (
	id  INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    sobrenome VARCHAR(100),
    especialidades_id INT,
    FOREIGN KEY (especialidades_id) REFERENCES especialidades(id)
    );

CREATE TABLE especialidades (
	id  INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);

CREATE TABLE consultas(
	id  INT PRIMARY KEY AUTO_INCREMENT,
    paciente_id INT,
    medico_id INT,
    data_consulta DATE,
    hora_consulta TIME,
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id),
    FOREIGN KEY (medico_id) REFERENCES medicos(id)
);
