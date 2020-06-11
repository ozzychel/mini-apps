DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;
USE checkout;

DROP TABLE IF EXISTS persondata;

CREATE TABLE persondata (
  id int not null auto_increment,
  name varchar(40) not null,
  email varchar(40) not null,
  password varchar(15) not null,
  primary key(id)
)
