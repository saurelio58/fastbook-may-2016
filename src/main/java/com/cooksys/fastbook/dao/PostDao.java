package com.cooksys.fastbook.dao;

import java.util.List;

import com.cooksys.fastbook.models.Post;

public interface PostDao {

	List<Post> index();

	List<Post> getPostsForUser(Integer userId);

	List<Post> getPostsForGroup(Integer groupId);

	Post addPostToUser(Integer userId, Post post);

	Post addPostToGroup(Integer groupId, Post post);

}
