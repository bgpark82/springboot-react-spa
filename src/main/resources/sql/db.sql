CREATE DATABASE clone_coding;
USE clone_coding;

CREATE TABLE `user` (
	`id`	INT(100)	AUtO_INCREMENT NOT NULL ,
	`name`	VARCHAR(20)	NOT NULL,
	`phone`	VARCHAR(20)	NOT NULL,
	`password`	VARCHAR(100)	NOT NULL,
	`email`	VARCHAR(100)	NOT NULL,
	`address`	VARCHAR(100)	NULL,
	`role`	VARCHAR(20)	NOT NULL,
	PRIMARY KEY(`id`)
);

DROP TABLE `user`;

INSERT INTO user VALUES (null, '박병길','010-4580-8682','a3228682','pop8682@gmail.com',null,'ROLE_USER');
INSERT INTO user VALUES (null, '케이시','010-2231-9969','a3227302','Kassie@gmail.com',null,'ROLE_USER');

SELECT * FROM user;