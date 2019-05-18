BEGIN TRANSACTION;

create table login(
id serial primary key,
hash varchar(100) not null,
email varchar(100) unique not null
);

COMMIT;



