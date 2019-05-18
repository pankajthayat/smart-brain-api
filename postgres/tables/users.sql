BEGIN TRANSACTION;

create table users(
id serial primary key,
name varchar(100),
email varchar(100) unique not null,
entries bigint default 0,
joined timestamp
);

COMMIT;