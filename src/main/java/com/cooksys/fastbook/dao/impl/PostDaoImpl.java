package com.cooksys.fastbook.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cooksys.fastbook.dao.PostDao;
import com.cooksys.fastbook.models.Post;

@Repository
@Transactional
public class PostDaoImpl implements PostDao 
{
	@Autowired
	private SessionFactory sessionFactory;
	
	private Session getSession()
	{
		return sessionFactory.getCurrentSession();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Post> index()
	{
		Session session = getSession();
		return session
				.createQuery("from Post")
				.list();
	}

	@Override
	public Post add(Post post)
	{
		Session session = getSession();
		
		session.save(post);
		
		return post;
	}

}
