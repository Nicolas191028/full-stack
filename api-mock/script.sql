-- Cria o banco de dados onde vamos trabalhar
create database sistema_produtos;

use sistema_produtos;

-- cria a tabela 'produtos' com algumas colunas básicas
create table produtos (
	id int auto_increment primary key, -- ID ÚNICO
    nome varchar(100) not null, -- Nome produto
    email varchar(120) not null, -- Email (exemplo genérico)
    telefone varchar(20), -- Telefone
    cpf varchar(14), -- Cpf
    endereco varchar(150) -- Endereco simples
);

-- Insere dois registro
insert into produtos (nome, email, telefone, cpf, endereco) values
	('Eduardo Ramos', 'edu.ramos@orutos.com', '11983784473', '243-675-767.56', 'Rua Orutos F'),
    ('Juliana Clara', 'juliana@oruto.com', '256975645756', '654-665-349.86', 'Rua Orutos'),
    ('Gabriela Araujo Santos', 'jorge@oruto.com', '8098369796', '666-666-666.67', 'Rua Oruto A');

-- Seleciona o registro onde o id = 1
select * from produtos where id = 2;
select * from produtos where id = 3;

select * from produtos;