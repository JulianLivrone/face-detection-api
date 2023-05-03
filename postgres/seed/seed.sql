BEGIN TRANSACTION;

INSERT INTO users (name, email, entries, joined) values ('Test', 'test@gmail.com', 5, '2023-01-01');
INSERT INTO login (hash, email) values ('$2a$10$gWeucpjzkNryAdWtcFby5.VrKWRDlJwPv8KtvQ6ZD2fZY9k.EE77W', 'test@gmail.com');

COMMIT;