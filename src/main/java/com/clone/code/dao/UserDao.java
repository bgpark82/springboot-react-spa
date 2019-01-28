package com.clone.code.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.clone.code.dto.UserDto;

//@RepositoryRestResource(exported = false)
public interface UserDao extends CrudRepository<UserDto, Integer>{

	
}
