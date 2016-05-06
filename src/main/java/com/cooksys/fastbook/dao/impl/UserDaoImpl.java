package com.cooksys.fastbook.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cooksys.fastbook.dao.UserDao;
import com.cooksys.fastbook.models.Friend;
import com.cooksys.fastbook.models.FriendId;
import com.cooksys.fastbook.models.Group;
import com.cooksys.fastbook.models.Like;
import com.cooksys.fastbook.models.User;

@Repository
@Transactional
public class UserDaoImpl implements UserDao {
	@Autowired
	private SessionFactory sessionFactory;

	private Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> index() {
		Session session = getSession();
		return session.createQuery("from User").list();
	}

	@Override
	public User add(User user) {
		Session session = getSession();

		// check to see if user exists
		String tempEmail = user.getEmail();
		User tempUser = getByEmail(tempEmail);

		if (tempUser != null) {
			// returning null indicates user already exists
			return null;
		} else {
			// create new user
			session.save(user);
			System.out.println(user.getId());
			return get(user.getId());
		}
	}

	@Override
	public User get(Integer id) {
		Session session = getSession();
		return (User) session.createQuery("from User u where u.id = :id").setInteger("id", id)
				.uniqueResult();
	}

	// Fuzzy query to find a first name or last name that includes
	// characters from a users input
	@SuppressWarnings("unchecked")
	@Override
	public List<User> queryUsers(String name) {
		Session session = getSession();
		name = "%" + name + "%";

		String hql = "from User u " + "where u.firstName like :string "
				+ "or u.lastName like :string";

		return session.createQuery(hql).setParameter("string", name).list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> getFriends(Integer id) {
		Session session = getSession();

		// Find all friend pairings that have been accepted
		// where one of the userIds matches the id
		String hql = "from Friend f " + "where (f.userBySentId.id = :id "
				+ "or f.userByReceivedId.id = :id) " + "and f.status is not false";

		List<Friend> friendPairings = session.createQuery(hql).setParameter("id", id).list();

		List<User> friends = new ArrayList<User>();

		for (Friend f : friendPairings)

		{
			// If id is sent user add received user
			if (f.getId().getSentId() == id) {
				friends.add(f.getUserByReceivedId());
			}

			// Otherwise add sent user
			else {
				friends.add(f.getUserBySentId());
			}
		}

		return friends;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Friend> getMyPendingRequests(Integer id) {
		Session session = getSession();

		// Find all pending friend requests that have
		// been sent to the user matching userId
		String hql = "from Friend f " + "where f.userByReceivedId.id = :id "
				+ "and f.status is false";

		return session.createQuery(hql).setParameter("id", id).list();
	}

	/**
	 * Returns the relationship between two users. A null return means that no
	 * relationship was found. Friend.status == true means they are friends.
	 * Friend.friendId.sentId == id means the profile sent the request to the
	 * logged in user. Friend.friendId.receivedId == id means the logged in user
	 * sent the profile a request.
	 * 
	 * @param id
	 * @param user
	 * @return
	 */
	@Override
	public Friend getFriendRelation(Integer profileId, Integer loggedInId) {
		Session session = getSession();
		User loggedInUser = get(loggedInId);
		User profileUser = get(profileId);

		String hql = "from Friend f " + "where (f.userBySentId = :loggedInUser "
				+ "and f.userByReceivedId = :profileUser) " + "or (f.userBySentId = :profileUser "
				+ "and f.userByReceivedId = :loggedInUser)";

		return (Friend) session.createQuery(hql).setParameter("loggedInUser", loggedInUser)
				.setParameter("profileUser", profileUser).uniqueResult();
	}

	@Override
	public Friend addFriendRequest(Integer profileId, User user) {
		Session session = getSession();

		User receiver = get(profileId);
		FriendId friendId = new FriendId(user.getId(), profileId);
		Friend friend = new Friend();
		friend.setId(friendId);
		friend.setUserByReceivedId(receiver);
		friend.setUserBySentId(user);
		session.save(friend);

		return getFriendRelation(profileId, user.getId());
	}

	@Override
	public List<Friend> acceptFriendRequestFromList(Integer id, Friend friend) {
		Session session = getSession();

		friend.setStatus(true);
		session.update(friend);

		return getMyPendingRequests(id);
	}

	@Override
	public List<Friend> denyFriendRequestFromList(Integer profileId, Integer senderId) {
		Session session = getSession();

		Friend friend = getFriendRelation(profileId, senderId);

		session.delete(friend);
		return getMyPendingRequests(profileId);
	}

	@Override
	public Friend acceptFriendRequest(Integer profileId, Friend friend) {
		Session session = getSession();
		User loggedInUser;

		if (friend.getId().getSentId() == profileId)
			loggedInUser = get(friend.getId().getReceivedId());
		else
			loggedInUser = get(friend.getId().getSentId());

		friend.setStatus(true);
		session.update(friend);

		return getFriendRelation(profileId, loggedInUser.getId());
	}

	@Override
	public Friend denyFriendRequest(Integer profileId, Integer loggedInId) {
		Session session = getSession();

		Friend friend = getFriendRelation(profileId, loggedInId);

		session.delete(friend);
		return getFriendRelation(profileId, loggedInId);
	}

	@Override
	public User getByEmail(String email) {
		Session session = getSession();

		String hql = "from User u " + "where u.email = :email";

		return (User) session.createQuery(hql).setParameter("email", email).uniqueResult();
	}

	@Override
	public List<Group> getUsersGroups(Integer id)
	{
		Session session = getSession();
		
		String hql= "SELECT gu.group FROM GroupUser gu WHERE gu.id.userId= :userId";
		
		return session.createQuery(hql).setInteger("userId", id).list();
	}

}
