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
		
	@RequestMapping(method = RequestMethod.POST)
	public Group addGroup(@RequestBody Group group)
	{
		return groupDao.add(group);
	}
		
	// fastbook/api/groups/{id}
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Group getGroup(@PathVariable Integer id)
	{
		return groupDao.get(id);
	}
}
