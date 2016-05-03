package com.cooksys.fastbook.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cooksys.fastbook.dao.UserDao;
import com.cooksys.fastbook.models.User;

@Repository
@Transactional
public class UserDaoImpl implements UserDao
{
	@Autowired
	private SessionFactory sessionFactory;
	
	private Session getSession()
	{
		return sessionFactory.getCurrentSession();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> index()
	{
		Session session = getSession();
		return session
				.createQuery("from User")
				.list();
	}

	@Override
	public User add(User user)
	{
		Session session = getSession();
		
		session.save(user);
		
		return get(user.getId() );
	}

	@Override
	public User get(Integer id)
	{
		Session session = getSession();
		return (User) session
				.createQuery("from User u where u.id = :id")
				.setInteger("id", id)
				.uniqueResult();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> queryUsers(String name) {
		Session session = getSession();
		name = "%" + name + "%";
		
		String hql = "from User u "
				+ "where u.firstName like :string "
				+ "or u.lastName like :string";
				
		return session
				.createQuery(hql)
				.setParameter("string", name)
				.list();
	}

}
