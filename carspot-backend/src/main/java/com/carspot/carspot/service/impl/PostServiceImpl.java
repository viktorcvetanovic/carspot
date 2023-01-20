package com.carspot.carspot.service.impl;

import com.carspot.carspot.entity.*;
import com.carspot.carspot.repository.PostRepository;
import com.carspot.carspot.service.PostService;
import java.util.List;
import java.util.NoSuchElementException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {
	private final PostRepository postRepository;

	@Override
	public List<Post> findAll(Specification<Post> specification) {
		return postRepository.findAll(specification);
	}

	@Override
	public Post findById(Integer postId) {
		return postRepository.findById(postId)
				.orElseThrow(() -> new NoSuchElementException("PostService.notFound"));
	}

	@Override
	public Post save(Post post) {
		System.out.println(post);
		return postRepository.save(post);
	}

	@Override
	public Post update(Post post) {
		return postRepository.save(post);
	}

	@Override
	public void deleteById(Integer postId) {
		postRepository.deleteById(postId);
	}


}