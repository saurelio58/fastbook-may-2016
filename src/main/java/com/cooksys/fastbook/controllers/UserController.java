package com.cooksys.fastbook.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.fastbook.dao.UserDao;
import com.cooksys.fastbook.models.User;

@RestController
@RequestMapping(value = "/users")
public class UserController 
{
	@Autowired
	private UserDao userDao;
	
	// fastbook/api/users/
	@RequestMapping(method = RequestMethod.GET)
	public List<User> index()
	{
		return userDao.index();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public User addUser(@RequestBody User user)
	{
		return userDao.add(user);
	}
	
	// fastbook/api/users/{id}
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public User getUser(@PathVariable Integer id)
	{
		return userDao.get(id);
	}
	
	// fastbook/api/users/find/{name}
	@RequestMapping(value = "/find/{name}", method = RequestMethod.GET)
	public List<User> queryUsers(@PathVariable String name)
	{
		return userDao.queryUsers(name);
	}
}
