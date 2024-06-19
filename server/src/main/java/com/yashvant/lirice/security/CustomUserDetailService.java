package com.yashvant.lirice.security;

import com.yashvant.lirice.entities.UserBlog;
import com.yashvant.lirice.exceptions.ResourceNotFoundException;
import com.yashvant.lirice.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/*@Service
public class CustomUserDetailService implements UserDetailsService {

	@Autowired
	private UserRepo userRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		// loading user from database by username
		UserBlog userBlog = this.userRepo.findByEmail(username)
				.orElseThrow(() -> new ResourceNotFoundException("User ", " email : " + username, 0));

		return userBlog;
	}

}*/
