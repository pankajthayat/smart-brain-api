BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values ('pankaj', 'bunny@gmail.com', 15, '2019-01-18');
INSERT into login (hash, email) values ('$2a$10$sIxlYxq3cK1psqlmAKiK7uuk6RC48xzjHdQqi1aR08mNQtkUWPAeq', 'bunny@gmail.com');

COMMIT;