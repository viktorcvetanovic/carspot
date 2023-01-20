package com.carspot.carspot.service;

import com.carspot.carspot.entity.*;
import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.domain.Specification;

public interface PostService {

	List<Post> findAll(Specification<Post> specification);

	Post save(Post post);

	Post update(Post post);

	Post findById(Integer postId);

	void deleteById(Integer postId);

}