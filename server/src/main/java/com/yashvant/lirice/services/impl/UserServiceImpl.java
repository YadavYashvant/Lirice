package com.yashvant.lirice.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.codewithdurgesh.blog.exceptions.*;
import com.codewithdurgesh.blog.payloads.UserDto;
import com.codewithdurgesh.blog.services.UserService;
import com.codewithdurgesh.blog.repositories.*;
import com.codewithdurgesh.blog.config.AppConstants;
import com.codewithdurgesh.blog.entities.*;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private RoleRepo roleRepo;

	@Override
	public UserDto createUser(UserDto userDto) {
		UserBlog userBlog = this.dtoToUser(userDto);
		UserBlog savedUserBlog = this.userRepo.save(userBlog);
		return this.userToDto(savedUserBlog);
	}

	@Override
	public UserDto updateUser(UserDto userDto, Integer userId) {

		UserBlog userBlog = this.userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User", " Id ", userId));

		userBlog.setName(userDto.getName());
		userBlog.setEmail(userDto.getEmail());
		userBlog.setPassword(userDto.getPassword());
		userBlog.setAbout(userDto.getAbout());

		UserBlog updatedUserBlog = this.userRepo.save(userBlog);
		UserDto userDto1 = this.userToDto(updatedUserBlog);
		return userDto1;
	}

	@Override
	public UserDto getUserById(Integer userId) {

		UserBlog userBlog = this.userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User", " Id ", userId));

		return this.userToDto(userBlog);
	}

	@Override
	public List<UserDto> getAllUsers() {

		List<UserBlog> userBlogs = this.userRepo.findAll();
		List<UserDto> userDtos = userBlogs.stream().map(user -> this.userToDto(user)).collect(Collectors.toList());

		return userDtos;
	}

	@Override
	public void deleteUser(Integer userId) {
		UserBlog userBlog = this.userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));
		this.userRepo.delete(userBlog);

	}

	public UserBlog dtoToUser(UserDto userDto) {
		UserBlog userBlog = this.modelMapper.map(userDto, UserBlog.class);

		// user.setId(userDto.getId());
		// user.setName(userDto.getName());
		// user.setEmail(userDto.getEmail());
		// user.setAbout(userDto.getAbout());
		// user.setPassword(userDto.getPassword());
		return userBlog;
	}

	public UserDto userToDto(UserBlog userBlog) {
		UserDto userDto = this.modelMapper.map(userBlog, UserDto.class);
		return userDto;
	}

	@Override
	public UserDto registerNewUser(UserDto userDto) {

		UserBlog userBlog = this.modelMapper.map(userDto, UserBlog.class);

		// encoded the password
		userBlog.setPassword(this.passwordEncoder.encode(userBlog.getPassword()));

		// roles
		Role role = this.roleRepo.findById(AppConstants.NORMAL_USER).get();

		userBlog.getRoles().add(role);

		UserBlog newUserBlog = this.userRepo.save(userBlog);

		return this.modelMapper.map(newUserBlog, UserDto.class);
	}

}
