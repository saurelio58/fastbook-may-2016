package com.cooksys.fastbook.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cooksys.fastbook.controllers.UserController;
import com.cooksys.fastbook.dao.GroupDao;
import com.cooksys.fastbook.models.Group;
import com.cooksys.fastbook.models.GroupUser;
import com.cooksys.fastbook.models.GroupUserId;
import com.cooksys.fastbook.models.User;

@Repository
@Transactional
public class GroupDaoImpl implements GroupDao 
{
	@Autowired
	private SessionFactory sessionFactory;
	
	@Autowired
	UserController userController;
	
	private Session getSession()
	{
		return sessionFactory.getCurrentSession();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Group> index()
	{
		Session session = getSession();
		return session
				.createQuery("from Group")
				.list();
	}

	@Override
	public Group add(Integer id, Group group)
	{
		Session session = getSession();
		
		session.save(group);
		GroupUserId gui = new GroupUserId(group.getId(),id);
		GroupUser newGroup = session.get(GroupUser.class, gui);
		
		GroupUser created = new GroupUser(gui, group, userController.getUser(id), true);
		
		
		session.save(created);
		
		return get(group.getId() );
	}

	@Override
	public Group get(Integer id)
	{
		Session session = getSession();
		
		
		return (Group) session
				.createQuery("from Group g where g.id = :id")
				.setInteger("id", id)
				.uniqueResult();
	}

	@Override
	public List<User> getUsersInGroup(Integer id)
	{
		Session session = getSession();
		
		String hql= "SELECT gu.user FROM GroupUser gu WHERE gu.id.groupId= :userId";
		
		return session.createQuery(hql).setInteger("userId", id).list();
	}

	@Override
	public User getGroupsOwner(Integer id)
	{
		Session session = getSession();
		
		String hql= "SELECT gu.user FROM GroupUser gu WHERE gu.id.groupId= :userId AND gu.owner= :owner";
		
		
		return (User) session.createQuery(hql).setInteger("userId", id).setBoolean("owner", true);
	}

	@Override
	public Group addUserToGroup(Integer id, User user)
	{
		Session session = getSession();
		
		GroupUserId gui = new GroupUserId(id,user.getId());
		GroupUser newGroup = session.get(GroupUser.class, gui);
		
		GroupUser created = new GroupUser(gui, get(id), user, false);
		
		session.save(created);
		
		return get(id);
	}

	@Override
	public List<Group> queryGroups(String name)
	{
		Session session = getSession();
		name = "%" + name + "%";
		
		String hql = "from Group g "
				+ "where g.name like :string ";
		
		return session
				.createQuery(hql)
				.setParameter("string", name)
				.list();
	}

}
