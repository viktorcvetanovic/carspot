
use carspot;

create table user(
user_id int primary key,
username varchar(64),
first_name varchar(64),
last_name varchar(64),
password varchar(64),
post_fk INT 
);

create table post(
post_id INT primary key,
post_name varchar(64),
post_desc varchar(128),
img varchar(128)
);

alter table user add constraint user_post foreign key (post_fk)
      references post (post_id) on delete restrict on update restrict;