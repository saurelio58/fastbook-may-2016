package com.cooksys.fastbook.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cooksys.fastbook.dao.GroupDao;
import com.cooksys.fastbook.models.Group;

@Repository
@Transactional
public class GroupDaoImpl implements GroupDao 
{
	@Autowired
	private SessionFactory sessionFactory;
	
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
	public Group add(Group group)
	{
		Session session = getSession();
		
		session.save(group);
		
		return get(group.getId() );
	}

	@Override
	public Group get(Integer id)
	{
		// TODO Auto-generated method stub
		return null;
	}

}
