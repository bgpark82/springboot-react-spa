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

CREATE TABLE `store` (
	`id`	INT	AUTO_INCREMENT NOT NULL,
	`state`	VARCHAR(255)	NULL,			
	`title`	VARCHAR(255)	NULL,			
	`size`	VARCHAR(255)	NULL,			
	`sort`	VARCHAR(255)	NULL,			
	`address_land`	VARCHAR(255)	NULL,	
	`address_road`	VARCHAR(255)	NULL,	
	`post`	INT	NULL,			
	`latitude`	VARCHAR(255)	NULL,				
	`longitude`	VARCHAR(255)	NULL,				
	`minimum_price`	VARCHAR(255)	NULL,
	`payment_option`	VARCHAR(255)	NULL,
	`info`	VARCHAR(255)	NULL,
	`hours`	VARCHAR(255)	NULL,
	 PRIMARY KEY(`id`)
);

DROP TABLE `store`;

INSERT INTO store VALUES (null,'김해','무한삼겹','121','카페',
'김해시 전하동','김해시 가야로','1234','124.1234','123.2314',
null,null,null,null);

SELECT * FROM store;