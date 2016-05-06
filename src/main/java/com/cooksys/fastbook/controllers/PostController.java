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
public class PostController {
	@Autowired
	private PostDao postDao;

	/**
	 * @return list of all posts
	 */
	// fastbook/api/posts/
	@RequestMapping(method = RequestMethod.GET)
	public List<Post> index() {
		return postDao.index();
	}

	/**
	 * get all posts for a user
	 * 
	 * @param userId
	 * @return list of posts for a user
	 */
	// fastbook/api/posts/user/{userId}
	@RequestMapping(value = "/user/{userId}", method = RequestMethod.GET)
	public List<Post> getPostsForUser(@PathVariable Integer userId) {
		return postDao.getPostsForUser(userId);
	}

	/**
	 * get all posts for a group
	 * 
	 * @param groupId
	 * @return list of posts for a group
	 */
	// fastbook/api/posts/group/{groupId}
	@RequestMapping(value = "/group/{groupId}", method = RequestMethod.GET)
	public List<Post> getPostsForGroup(@PathVariable Integer groupId) {
		return postDao.getPostsForGroup(groupId);
	}

	/**
	 * add a post to a user
	 * 
	 * @param userId,
	 *            post
	 * @return post object
	 */
	// fastbook/api/posts/user/{userId}
	@RequestMapping(value = "/user/{userId}", method = RequestMethod.POST)
	public Post addPostToUser(@PathVariable Integer userId, @RequestBody Post post) {
		return postDao.addPostToUser(userId, post);
	}

	/**
	 * add a post to a group
	 * 
	 * @param groupId,
	 *            post
	 * @return post object
	 */
	// fastbook/api/posts/group/{groupId}
	@RequestMapping(value = "/group/{groupId}", method = RequestMethod.POST)
	public Post addPostToGroup(@PathVariable Integer groupId, @RequestBody Post post) {
		return postDao.addPostToGroup(groupId, post);
	}

}
