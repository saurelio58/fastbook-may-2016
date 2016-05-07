package com.cooksys.fastbook.models;

public class PostWithLikeData {
	private Post post;
	private long likeCount;
	private boolean status;
	
	public PostWithLikeData(Post post, long likeCount, boolean status)
	{
		this.post = post;
		this.likeCount = likeCount;
		this.status = status;
	}

	public Post getPost()
	{
		return post;
	}

	public void setPost(Post post)
	{
		this.post = post;
	}

	public long getLikeCount()
	{
		return likeCount;
	}

	public void setLikeCount(long likeCount)
	{
		this.likeCount = likeCount;
	}

	public boolean getStatus()
	{
		return status;
	}

	public void setStatus(boolean status)
	{
		this.status = status;
	}
	
	
}
