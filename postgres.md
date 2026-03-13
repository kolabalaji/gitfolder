Postgres

Mac login to Postgres Database

psql postgres  ### command to login 

postgres=# create database rooms; ### create database rooms

postgres=# create database rooms;
CREATE DATABASE
postgres=# \c rooms

psql (14.19 (Homebrew), server 15.17 (Homebrew))
You are now connected to database "rooms" as user "kSSSSSSS".
rooms=#

#### CREATING THE DB TABLE ###

postgres=# create database rooms;
CREATE DATABASE
postgres=# \c rooms
psql (14.19 (Homebrew), server 15.17 (Homebrew))
WARNING: psql major version 14, server major version 15.
         Some psql features might not work.
You are now connected to database "rooms" as user "kobalaji".
rooms=# CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    room_name VARCHAR(50) NOT NULL,
    capacity INTEGER,
    is_available BOOLEAN DEFAULT true
);
CREATE TABLE

rooms=# \dt   ### TO VIEW THE CREATED TABLE
           List of relations
 Schema |   Name    | Type  |  Owner
--------+-----------+-------+----------
 public | inventory | table | KSSSSSSSS

### INSERT TABLE ####

rooms=# INSERT INTO inventory (room_name, capacity)
VALUES ('Conference Room A', 10);
INSERT 0 1
rooms=# SELECT * FROM inventory;
 id |     room_name     | capacity | is_available
----+-------------------+----------+--------------
  1 | Conference Room A |       10 | t
(1 row)
