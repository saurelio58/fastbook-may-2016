package com.cooksys.fastbook.dao;

import java.util.List;

import com.cooksys.fastbook.models.Post;

public interface PostDao {

	List<Post> index();
	Post add(Post post);

}
