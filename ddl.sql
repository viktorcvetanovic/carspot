create table carspot;
use carspot;

create table user(
user_id int primary key,
username varchar(64),
first_name varchar(64),
last_name varchar(64),
group_fk int foreing key
);

create table group(
group_id int primary key,
name varchar(128)
);