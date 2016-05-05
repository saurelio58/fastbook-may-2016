package com.cooksys.fastbook.models;

// Generated May 5, 2016 8:24:55 AM by Hibernate Tools 4.3.1

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

/**
 * Like generated by hbm2java
 */
@Entity
@Table(name = "like", catalog = "fastbook")
public class Like implements java.io.Serializable {

	private int id;
	private User user;
	private Set<Post> posts = new HashSet<Post>(0);

	public Like()
	{
	}

	public Like(User user)
	{
		this.user = user;
	}

	public Like(User user, Set<Post> posts)
	{
		this.user = user;
		this.posts = posts;
	}

	@GenericGenerator(name = "generator", strategy = "foreign", parameters = @Parameter(name = "property", value = "user"))
	@Id
	@GeneratedValue(generator = "generator")
	@Column(name = "id", unique = true, nullable = false)
	public int getId()
	{
		return this.id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	@OneToOne(fetch = FetchType.LAZY)
	@PrimaryKeyJoinColumn
	public User getUser()
	{
		return this.user;
	}

	public void setUser(User user)
	{
		this.user = user;
	}

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "like_post", catalog = "fastbook", joinColumns = { @JoinColumn(name = "like_id", nullable = false, updatable = false) }, inverseJoinColumns = { @JoinColumn(name = "post_id", nullable = false, updatable = false) })
	public Set<Post> getPosts()
	{
		return this.posts;
	}

	public void setPosts(Set<Post> posts)
	{
		this.posts = posts;
	}

}
