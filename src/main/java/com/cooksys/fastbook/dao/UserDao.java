package com.cooksys.fastbook.dao;

import java.util.List;

import com.cooksys.fastbook.models.Friend;
import com.cooksys.fastbook.models.Group;
import com.cooksys.fastbook.models.User;

public interface UserDao
{

	List<User> index();
	User add(User user);
	User get(Integer id);
	List<User> queryUsers(String name);
	List<User> getFriends(Integer id);
	List<Friend> getMyPendingRequests(Integer id);
	Friend addFriendRequest(Integer id, User user);
	List<Friend> acceptFriendRequestFromList(Integer id, Friend friend);
	List<Friend> denyFriendRequestFromList(Integer profileId, Integer senderId);
	
	/**
	 * Returns the relationship between two users 
	 * A null return means that no relationship was found. 
	 * Friend.status == true means they are friends. 
	 * Friend.friendId.sentId == profileId means the profile 
	 * sent the request to the logged in user. 
	 * Friend.friendId.receivedId == profileId means the logged 
	 * in user sent the profile a request.
	 * @param id
	 * @param user
	 * @return
	 */
	Friend getFriendRelation(Integer profileId, Integer loggedInid);
	Friend acceptFriendRequest(Integer profileId, Friend friend);
	Friend denyFriendRequest(Integer profileId, Integer loggedInId);
	User getByEmail(String email);
	
	
	/**
	 * Returns a list of all the groups a specific user (user_id) is 
	 * currently apart of. If the user is apart of no groups then it 
	 * returns an empty list.
	 * @param id
	 * @return
	 */
	List<Group> getUsersGroups(Integer id);

}
