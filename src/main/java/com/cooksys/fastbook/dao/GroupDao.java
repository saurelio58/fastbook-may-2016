package com.cooksys.fastbook.dao;

import java.util.List;

import com.cooksys.fastbook.models.Group;
import com.cooksys.fastbook.models.User;

public interface GroupDao {

	List<Group> index();
	
	/**
	 * Creates a new group and makes the user with the user id passed
	 * in the owner of the group.
	 * @param group
	 * @param userId
	 * @return
	 */
	Group add(Integer id, Group group);
	
	/**
	 * Returns a specific group with the id that is passed into it.
	 * @param id
	 * @return
	 */
	Group get(Integer id);
	
	/**
	 * Returns a list of Users in a group by passing 
	 * in a specific group id.
	 * @param group id
	 * @return
	 */
	List<User> getUsersInGroup(Integer id);
	
	/**
	 * Returns a User object of the owner(creator) of the 
	 * specific group that is passed in.
	 * @param id
	 * @return
	 */

	User getGroupsOwner(Integer id);
	
	/**
	 * Returns a Group object, the group in which the new user is added
	 * @param id
	 * @param user 
	 * @return
	 */

	Group addUserToGroup(Integer id, User user);

	List<Group> queryGroups(String name);

}
