package com.clone.code.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import com.clone.code.dto.StoreDto;

public interface StoreRepository extends JpaRepository<StoreDto, Integer>{

	
}
