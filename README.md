# SpringBoot_React_SPA

## Join

> Do not use camelCase for the dto member variables  
> there is a high chance to get an error if you have the duplicated value names of database

## Spring Security
[Spring-security-구조](https://minwan1.github.io/2017/03/25/2017-03-25-spring-security-theory/)


## Thymeleaf
1. Spring security tag

```
<dependency>
	<groupId>org.thymeleaf.extras</groupId>
	<artifactId>thymeleaf-extras-springsecurity5</artifactId>
</dependency>
```
```
<div sec:authorize="isAuthenticated()">
	<div th:if="${session.user.getName() != null}">
		<span th:text="${session.user.getName()}" />님 반갑습니다		
	</div>
</div>
```

[Thymeleaf - Spring Security integration modules](https://github.com/thymeleaf/thymeleaf-extras-springsecurity)
