insert into role (id,name,description) values (1,'USER','Usuário comum');
insert into role (id,name,description) values (2,'ADMIN','Usuário administrativo');
insert into users (email,name,password,role,id) values ('user@user.com','Adriano Faria Alves','$2a$10$.nNh.Ve.ZdlsG45MwUhtMuUxo1cELrdP8LwvcqdAWOg6bH2ffmmNC','USER',9);
insert into users (email,name,password,role,id) values ('admin@escritorio.com','administrador','$2a$10$.nNh.Ve.ZdlsG45MwUhtMuUxo1cELrdP8LwvcqdAWOg6bH2ffmmNC','ADMIN',10);