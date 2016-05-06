package com.cooksys.fastbook.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.fastbook.dao.GroupDao;
import com.cooksys.fastbook.models.Group;
import com.cooksys.fastbook.models.User;

@RestController
@RequestMapping(value = "/groups")
public class GroupController 
{
	@Autowired
	private GroupDao groupDao;
	
	// fastbook/api/groups/
	@RequestMapping(method = RequestMethod.GET)
	public List<Group> index()
	{
		return groupDao.index();
	}
		
	@RequestMapping(value= "/{id}", method = RequestMethod.POST)
	public Group addGroup(@PathVariable Integer id, @RequestBody Group group)
	{
		return groupDao.add(id, group);
	}
		
	// fastbook/api/groups/{id}
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Group getGroup(@PathVariable Integer id)
	{
		return groupDao.get(id);
	}
	
	// fastbook/api/groups/users/{id}
	@RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
	public List<User> getUsersInGroup(@PathVariable Integer id)
	{
		return groupDao.getUsersInGroup(id);
	}
	
	//fastbook/api/groups/owner/{id}
	@RequestMapping(value = "/owner/{id}", method = RequestMethod.GET)
	public User getGroupsOwner(@PathVariable Integer id)
	{
		return groupDao.getGroupsOwner(id);
	}
	
	//fastbook/api/groups/{id}
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public Group addUserToGroup(@PathVariable Integer id, @RequestBody User user)
	{
		return groupDao.addUserToGroup(id, user);
	}
	
	// fastbook/api/users/find/{name}
		@RequestMapping(value = "/find/{name}", method = RequestMethod.GET)
		public List<Group> queryGroups(@PathVariable String name)
		{
			return groupDao.queryGroups(name);
		}
}
