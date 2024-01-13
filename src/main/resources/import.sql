insert into role (id,name,description) values (500,'USER','Usuário comum');
insert into role (id,name,description) values (1500,'ADMIN','Usuário administrativo');
insert into users (id,email,name,password) values (1000,'user@user.com','Adriano Faria Alves','$2a$10$.nNh.Ve.ZdlsG45MwUhtMuUxo1cELrdP8LwvcqdAWOg6bH2ffmmNC');
insert into users (id,email,name,password) values (2000,'admin@escritorio.com','administrador','$2a$10$.nNh.Ve.ZdlsG45MwUhtMuUxo1cELrdP8LwvcqdAWOg6bH2ffmmNC');

insert into user_role (user_id, role_id) values (1000,500);
insert into user_role (user_id, role_id) values (2000,500);
insert into user_role (user_id, role_id) values (2000,1500);