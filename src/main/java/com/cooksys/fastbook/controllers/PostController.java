package com.cooksys.fastbook.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.fastbook.dao.PostDao;
import com.cooksys.fastbook.models.Post;

@RestController
@RequestMapping(value = "/posts")
public class PostController 
{
	@Autowired
	private PostDao postDao;
	
	// fastbook/api/posts/
	@RequestMapping(method = RequestMethod.GET)
	public List<Post> index()
	{
		return postDao.index();
	}
			
	@RequestMapping(method = RequestMethod.POST)
	public Post addPost(@RequestBody Post post)
	{
		return postDao.add(post);
	}
}
