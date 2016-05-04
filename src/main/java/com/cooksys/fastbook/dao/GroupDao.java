package com.cooksys.fastbook.dao;

import java.util.List;

import com.cooksys.fastbook.models.Group;

public interface GroupDao {

	List<Group> index();
	Group add(Group group);
	Group get(Integer id);

}
