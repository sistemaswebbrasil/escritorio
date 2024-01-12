insert into role (id,name,description) values (500,'USER','Usuário comum');
insert into role (id,name,description) values (1500,'ADMIN','Usuário administrativo');
insert into users (id,email,name,password,role) values (1000,'user@user.com','Adriano Faria Alves','$2a$10$.nNh.Ve.ZdlsG45MwUhtMuUxo1cELrdP8LwvcqdAWOg6bH2ffmmNC','USER');
insert into users (id,email,name,password,role) values (2000,'admin@escritorio.com','administrador','$2a$10$.nNh.Ve.ZdlsG45MwUhtMuUxo1cELrdP8LwvcqdAWOg6bH2ffmmNC','ADMIN');