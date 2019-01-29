package com.clone.code.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.clone.code.dao.UserRepository;
import com.clone.code.dto.UserDto;

@Component
public class SecurityUserDetailService implements UserDetailsService{

	private final UserRepository userRepository;
	
	@Autowired
	public SecurityUserDetailService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		UserDto user = this.userRepository.findByEmail(email);
		return new User(user.getEmail(), user.getPassword(),AuthorityUtils.createAuthorityList(user.getRole()));
	}

}
