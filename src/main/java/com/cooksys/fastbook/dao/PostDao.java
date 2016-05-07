package com.cooksys.fastbook.dao;

import java.util.List;

import com.cooksys.fastbook.models.Post;
import com.cooksys.fastbook.models.PostWithLikeData;

public interface PostDao {

	List<Post> index();

	List<Post> getPostsForUser(Integer userId);

	List<Post> getPostsForGroup(Integer groupId);

	Post addPostToUser(Integer userId, Post post);

	Post addPostToGroup(Integer groupId, Post post);

	List<PostWithLikeData> getPostsForUser(Integer userId, Integer loggedInId);

	List<Post> getPostsForGroup(Integer groupId, Integer loggedInId);

	Post addPostToUser(Integer userId, Post post);

	Post addPostToGroup(Integer groupId, Post post);

}
