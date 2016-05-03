package com.cooksys.fastbook.dao;

import java.util.List;

import com.cooksys.fastbook.models.User;

public interface UserDao
{

	List<User> index();
	User add(User user);
	User get(Integer id);
	List<User> queryUsers(String name);

}
